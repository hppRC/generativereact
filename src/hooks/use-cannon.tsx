import CANNON from 'cannon';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRender } from 'react-three-fiber';

type Props = {
  gravity: CANNON.Vec3;
};

// Cannon-world context provider
const context = React.createContext({} as CANNON.World);

export const Provider: React.FCX<Props> = ({ children, gravity }) => {
  // Set up physics
  const [world] = useState(() => new CANNON.World());
  useEffect(() => {
    world.broadphase = new CANNON.NaiveBroadphase();
    world.solver.iterations = 10;
    world.gravity.set(gravity.x, gravity.y, gravity.z);
  }, [world, gravity]);

  // Run world stepper every frame
  useRender(() => world.step(1 / 60), false);
  // Distribute world via context
  return <context.Provider value={world} children={children} />;
};

// Custom hook to maintain a world physics body

export const useCannon = (
  { ...props },
  fn: (args: any) => any,
  deps: any[] = []
) => {
  const ref = useRef<CANNON.Body>();
  // Get cannon world object
  const world: CANNON.World = useContext(context);
  // Instanciate a physics body
  const [body] = useState(() => new CANNON.Body(props));
  useEffect(() => {
    // Call function so the user can add shapes
    fn(body);
    // Add body to world on mount
    world.addBody(body);
    // Remove body on unmount
    return () => world.remove(body);
  }, [world, body, fn, deps]);

  useRender(() => {
    if (ref.current) {
      // Transport cannon physics into the referenced threejs object
      ref.current.position.copy(body.position);
      ref.current.quaternion.copy(body.quaternion);
    }
  }, false);

  return ref;
};
