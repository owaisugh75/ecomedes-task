/**
 * This file implements a shim that manages the lifecycle of an external component.
 *
 * The external component is loaded dynamically by creating a script element with the provided URL.
 * Once the script is loaded, it checks if the component is registered in the global window object.
 * If the component is registered, it sets the value of the `externalComponent` store with the loaded component.
 *
 * The external component is then mounted by calling the `mountExternalComponent` function, which takes an HTML
 * element and props.
 */
import { get, writable, type Writable } from "svelte/store";

import type { Product } from "../data/products";

/**
 * Props for the DemoComponent.
 *
 * @property products The list of products to display. See: `src/data/products.ts`.
 * @property index The index of the product to display.
 */
type DemoComponentProps = {
  products: Product[];
  index: number;
};

/**
 * Represents the external component.
 */
type DemoComponent = {
  mount(element: HTMLElement, props: DemoComponentProps): HandleStateChange;
  unmount(): void;
};

/**
 * Callback function type for handling state changes. This will be called when the user increments
 * or decrements the number on the root page.
 *
 * @param state The new state value.
 */
export type HandleStateChange = (state: number) => void;

/**
 * Represents the external component. It is private to this module, and should not be used directly.
 *
 * @type {Writable<DemoComponent | null>}
 */
const externalComponent: Writable<DemoComponent | null> = writable(null);

declare global {
  interface Window {
    externalComponent?: DemoComponent;
  }
}

/**
 * Loads an external JavaScript component by dynamically creating a script element with the provided URL.
 * Once the script is loaded, it checks if the component is registered in the global window object.
 * If the component is registered, it sets the value of the `externalComponent` store with the loaded component.
 *
 * @param url The URL of the external JavaScript file containing the component.
 * @returns A promise that resolves to `true` if the component is successfully loaded, or rejects with an error otherwise.
 */
export function loadExternalComponent(url: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {

      if (!window.externalComponent) {
        reject(new Error("External JS loaded, but did not register component"));
        return;
      }

      externalComponent.set(window.externalComponent);
      resolve(true);
    };
    script.onerror = (e) => {
      reject(e);
    };
    document.body.appendChild(script);
  });
}

/**
 * Mounts an external component into the specified element with the given props.
 *
 * @param element The HTML element to mount the component into.
 * @param props The props to pass to the component.
 * @returns A function to handle state changes of the mounted component.
 * @throws Error if the external component is not loaded.
 */
export function mountExternalComponent(
  element: HTMLElement,
  props: DemoComponentProps
): HandleStateChange {
  const component = get(externalComponent);
  if (!component) {
    throw new Error("External component is not loaded");
  } else {
    return component.mount(element, props);
  }
}

/**
 * Unmounts the external component.
 */
export function unmountExternalComponent() {
  const component = get(externalComponent);

  if (!component) {
    return
  } else {
    component.unmount();
  }
}
