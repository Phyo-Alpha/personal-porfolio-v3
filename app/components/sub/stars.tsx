import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

// Custom function to generate points in a sphere
function generateSpherePoints(count: number, radius: number): Float32Array {
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Generate random points in a sphere using spherical coordinates
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = radius * Math.cbrt(Math.random()); // Cube root for uniform distribution

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        points[i * 3] = x;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = z;
    }
    return points;
}

export const StarBackground = (props: any) => {
    const ref = useRef<PointsType | null>(null);
    const [sphere] = useState(() => generateSpherePoints(5000, 1.2));

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                stride={3}
                positions={sphere}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);