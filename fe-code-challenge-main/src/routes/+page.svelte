<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import Counter from "./Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  
  import {
    loadExternalComponent,
    mountExternalComponent,
    unmountExternalComponent,
    type HandleStateChange,
  } from "$lib/external-component";
  import { products } from "../data/products";

let onStateChange: HandleStateChange | undefined;
 let count = 0;
 let container = null ;
  onMount(() => {
    loadExternalComponent("/external-component.js")
      .then(() => {
        container = document.getElementById("container");
        if (!container) {
          throw new Error("Container not found");
        }
        onStateChange = mountExternalComponent(container, {
          products: products,
          index: count,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  });

 $: if (count) {

        if (!container) {
          throw new Error("Container not found");
        }
        if (count >= products.length) {
          count = 0;
        } else if (count < 0) {
          count = products.length - 1;
        }
        
        mountExternalComponent(container, {
          products: products,
          index: count,
        });
}

  onDestroy(unmountExternalComponent);

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcome_fallback} alt="Welcome" />
      </picture>
    </span>
  </h1>

  <style>
    #container {
      background-color: coral;
      border-style: solid;
      border-color: black;
      border-width: 2px;
      border-radius: 0.5em;
      margin: 0.5em;
    }

    #container p {
      margin: 0.5em;
    }
  </style>

  <!-- Feel free to change the above styling to your liking! -->
  <div id="container">
    <p>Mount your react component here!!</p>
  </div>

  <Counter  {onStateChange} bind:count={count} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
