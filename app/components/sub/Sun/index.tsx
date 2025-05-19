import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Shader code
const simplexNoise = `
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) { 
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.7, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;

        i = mod289(i);
        vec4 p = permute(permute(permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    float fbm(vec3 p) {
        float v = 0.0;
        float a = 0.7;
        vec3 shift = vec3(100.0);
        for (int i = 0; i < 6; ++i) {
            v += a * snoise(p);
            p = p * 2.0 + shift;
            a *= 0.7;
        }
        return v;
    }

    float fbmDetail(vec3 p) {
        float v = 0.0;
        float a = 0.7;
        vec3 shift = vec3(50.0);
        for (int i = 0; i < 4; ++i) {
            v += a * snoise(p);
            p = p * 3.0 + shift;
            a *= 0.7;
        }
        return v;
    }
`;

const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    void main() {
        vUv = uv;
        vPosition = position;
        vNormal = normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    ${simplexNoise}
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;

    void main() {
        vec3 pos = vPosition * 1.5 + time * 0.1;

        float n1 = fbm(pos);
        n1 = n1 * 0.7 + 0.7;

        float n2 = fbm(pos + vec3(10.0));
        n2 = n2 * 0.7 + 0.7;

        float baseNoise = (n1 * 0.6 + n2 * 0.4);
        baseNoise = clamp(baseNoise, 0.0, 1.0);

        float detail = fbmDetail(pos * 5.0 + vec3(20.0));
        detail = detail * 0.9 + 0.9;
        baseNoise += detail * 0.1;
        baseNoise = clamp(baseNoise, 0.0, 1.0);

        float glowFactor = pow(max(dot(vNormal, normalize(cameraPosition - vPosition)), 0.0), 2.0);
        vec3 glowColor = vec3(1.0, 0.8, 0.0);
        vec3 radiantGlow = glowColor * glowFactor * 0.3;

        vec3 yellow = vec3(1.0, 1.0, 0.1);
        vec3 red = vec3(1.0, 0.0, 0.2);
        vec3 orange = vec3(1.0, 0.6, 0.2);

        vec3 color = mix(yellow, orange, baseNoise);
        color = mix(color, red, detail * 0.2);
        color += radiantGlow;

        gl_FragColor = vec4(color, 1.0);
    }
`;

const Sun = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sunRef = useRef<THREE.Mesh | null>(null);
    const timeRef = useRef(0);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = null;
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 2;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            premultipliedAlpha: false
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Set initial size based on device
        const isMobile = window.innerWidth <= 768;
        const height = isMobile ? window.innerHeight * 0.6 : window.innerHeight; // Reduce height on mobile
        renderer.setSize(window.innerWidth, height);
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create sun
        const geometry = new THREE.SphereGeometry(1, 64, 64); // Increased segments for smoother sphere
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                time: { value: 0 }
            }
        });

        const sun = new THREE.Mesh(geometry, material);
        scene.add(sun);
        sunRef.current = sun;

        // Position sun on the right side
        const updateSunPosition = () => {
            if (!cameraRef.current || !sunRef.current) return;

            const aspectRatio = window.innerWidth / window.innerHeight;
            const isMobile = window.innerWidth <= 768; // Mobile breakpoint

            if (isMobile) {
                // Center the sun on mobile with reduced size
                sunRef.current.position.x = 0;
                sunRef.current.position.y = 0;
                sunRef.current.scale.set(0.7, 1, 0.7); // Reduce size on mobile
                // Adjust camera position for mobile
                cameraRef.current.position.z = 2.5;
            } else {
                // Desktop positioning
                const offsetX = 0;
                const offsetY = aspectRatio > 1 ? -0.2 : -0.1;
                sunRef.current.position.x = offsetX;
                sunRef.current.position.y = offsetY;
                sunRef.current.scale.set(1, 1, 1); // Normal size on desktop
                cameraRef.current.position.z = 2;
            }
        };

        updateSunPosition();

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            timeRef.current += 0.01;

            if (sunRef.current) {
                sunRef.current.rotation.y += 0.0004;
                (sunRef.current.material as THREE.ShaderMaterial).uniforms.time.value = timeRef.current;
            }

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;

            const width = window.innerWidth;
            const isMobile = width <= 768;
            const height = isMobile ? window.innerHeight * 0.6 : window.innerHeight; // Reduce height on mobile

            cameraRef.current.aspect = width / height;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(width, height);
            rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Update sun position on resize
            updateSunPosition();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && rendererRef.current) {
                mountRef.current.removeChild(rendererRef.current.domElement);
            }
            if (sunRef.current) {
                sunRef.current.geometry.dispose();
                (sunRef.current.material as THREE.Material).dispose();
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className='z-10 h-[60vh] md:h-screen'
        />
    );
};

export default Sun; 