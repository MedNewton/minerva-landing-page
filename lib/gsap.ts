/**
 * Single GSAP entry point. Registers the plugins the landing uses so every
 * component imports from here instead of registering ad hoc.
 * Client-only: import it from `'use client'` modules.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText };
