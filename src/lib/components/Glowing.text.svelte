<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';

	export let text: string = 'Shopify Development';
	export let className: string = '';
	export let animationSpeed: number = 0.07; // Customizable speed
	export let glowIntensity: number = 0.6; // Customizable intensity

	let textElement: HTMLSpanElement;
	let characters: HTMLSpanElement[] = [];
	let timeline: gsap.core.Timeline;

	interface GlowConfig {
		dimmed: {
			textShadow: string;
			opacity: number;
			scale: number;
		};
		normal: {
			textShadow: string;
			opacity: number;
			scale: number;
		};
		bright: {
			textShadow: string;
			opacity: number;
			scale: number;
		};
	}

	const glowStates: GlowConfig = {
		dimmed: {
			textShadow: `
				0 0 1px rgba(255, 255, 255, ${0.1 * glowIntensity}),
				0 0 2px rgba(255, 255, 255, ${0.05 * glowIntensity})
			`,
			opacity: 1,
			scale: 0.98
		},
		normal: {
			textShadow: `
				0 0 3px rgba(255, 255, 255, ${0.4 * glowIntensity}),
				0 0 6px rgba(255, 255, 255, ${0.3 * glowIntensity}),
				0 0 10px rgba(255, 255, 255, ${0.2 * glowIntensity}),
				0 0 15px rgba(255, 255, 255, ${0.1 * glowIntensity})
			`,
			opacity: 1,
			scale: 1
		},
		bright: {
			textShadow: `
				0 0 8px rgba(255, 255, 255, ${1 * glowIntensity}),
				0 0 16px rgba(255, 255, 255, ${0.8 * glowIntensity}),
				0 0 24px rgba(255, 255, 255, ${0.6 * glowIntensity}),
				0 0 32px rgba(255, 255, 255, ${0.4 * glowIntensity}),
				0 0 48px rgba(255, 255, 255, ${0.3 * glowIntensity}),
				0 0 64px rgba(255, 255, 255, ${0.2 * glowIntensity})
			`,
			opacity: 1,
			scale: 1.08
		}
	};

	function createCharacterElements(): void {
		textElement.innerHTML = '';
		characters = [];

		text.split('').forEach((char: string, index: number) => {
			const span: HTMLSpanElement = document.createElement('span');
			span.textContent = char === ' ' ? '\u00A0' : char;
			span.classList.add('char');
			span.style.display = 'inline-block';
			span.style.position = 'relative';
			span.dataset.index = index.toString();
			textElement.appendChild(span);
			characters.push(span);
		});
	}

	function initializeAnimation(): void {
		// Set all characters to dimmed state initially
		gsap.set(characters, glowStates.dimmed);

		timeline = gsap.timeline({ 
			repeat: -1, 
			repeatDelay: 2.5,
		});

		// Create the wave animation
		characters.forEach((char: HTMLSpanElement, index: number) => {
			const startTime: number = index * animationSpeed;
			const isSpace: boolean = char.textContent === '\u00A0';
			
			if (isSpace) {
				// Skip animation for spaces but keep them dimmed
				timeline.set(char, glowStates.dimmed, startTime);
				return;
			}

			timeline
				// Quick glow up
				.to(char, {
					...glowStates.bright,
					duration: 0.15,
					ease: 'power3.out'
				}, startTime)
				// Hold bright state briefly
				.to(char, {
					...glowStates.bright,
					duration: 0.1,
					ease: 'none'
				}, startTime + 0.15)
				// Fade to normal
				.to(char, {
					...glowStates.normal,
					duration: 0.25,
					ease: 'power2.inOut'
				}, startTime + 0.25)
				// Dim down slowly
				.to(char, {
					...glowStates.dimmed,
					duration: 0.5,
					ease: 'power2.in'
				}, startTime + 0.5);
		});

		timeline.delay(0.8);
	}

	onMount(() => {
		createCharacterElements();
		initializeAnimation();
	});

	onDestroy(() => {
		if (timeline) {
			timeline.kill();
		}
	});

	// Reactive updates
	$: if (text && textElement) {
		if (timeline) timeline.kill();
		createCharacterElements();
		initializeAnimation();
	}
</script>

<span
	bind:this={textElement}
	class="dramatic-glowing-text inline-block rounded-full border border-[#222] bg-black px-5 py-1 my-2 text-[#EDEEF0] {className}"
	aria-label={text}
>
	{text}
</span>

<style>
	:global(.dramatic-glowing-text) {
		color: #ffffff;
		font-weight: 400;
		letter-spacing: 0.02em;
	}

	:global(.dramatic-glowing-text .char) {
		text-shadow:
			0 0 1px rgba(255, 255, 255, 0.1),
			0 0 2px rgba(255, 255, 255, 0.05);
		transition: all 0.2s ease;
		opacity: 1;
		transform-origin: center;
		will-change: transform, opacity, text-shadow;
	}

	/* Enhanced hover effect */
	:global(.dramatic-glowing-text:hover .char) {
		text-shadow:
			0 0 4px rgba(255, 255, 255, 0.5),
			0 0 8px rgba(255, 255, 255, 0.4),
			0 0 12px rgba(255, 255, 255, 0.3),
			0 0 16px rgba(255, 255, 255, 0.2);
		opacity: 1;
		transform: scale(1.02);
	}

	/* Accessibility */
	@media (prefers-reduced-motion: reduce) {
		:global(.dramatic-glowing-text .char) {
			transition: none;
			animation: none;
		}
	}
</style>