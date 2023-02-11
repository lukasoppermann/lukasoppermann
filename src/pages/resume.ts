import type { APIContext } from 'astro';
import { resumePdfLink } from '@src/config'

export function get({ redirect }: APIContext) {
  return redirect(resumePdfLink, 302);
}