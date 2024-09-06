// src/hooks.server.js
import PocketBase from "pocketbase";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  event.locals.pb = new PocketBase("http://pocketbase:8090");

  const response = await resolve(event);
  return response;
}
