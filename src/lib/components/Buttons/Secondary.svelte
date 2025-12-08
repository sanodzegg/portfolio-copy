<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';

    const { text, href, retarget } = $props<{ text: string; href?: string, retarget?: boolean }>();
    const tag = href ? 'a' : 'button';

    const linkAttrs: HTMLAnchorAttributes = {
        href,
        'data-sveltekit-preload-data': 'hover',
        ...(retarget && { target: '_blank' })
    };
</script>

<div class="gradient-wrapper group w-full">
    <svelte:element
        this={tag}
        class="flex items-center justify-center h-14 bg-[#050505] rounded-[10px] w-full cursor-pointer"
        {...(tag === 'a' && linkAttrs)}
    >
        <span class="font-medium uppercase text-base leading-6 text-[#C4C4C4] group-hover:text-white">
            {text}
        </span>
    </svelte:element>
</div>