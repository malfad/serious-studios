---
title: "Typesetting for Dark Backgrounds: Rules We Keep Breaking"
date: 2026-05-16
excerpt: "Light type on dark backgrounds behaves differently than dark on light. Most designers treat it as an inversion. It isn't."
category: "Typography"
author: "Aqui"
coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80"
---

The simplest version of dark mode design: take your light mode and invert the colors. Black becomes white. White becomes black. Done.

This produces work that is technically readable and aesthetically wrong in ways that are hard to articulate but immediately felt.

## Why inversion doesn't work

Type rendered in pure white on pure black is harsher than dark type on white, because of how the eye processes light-emitting versus light-reflecting surfaces. The retinal adjustment required for white letterforms on black at extended reading lengths causes a kind of optical fatigue that you don't get at the same duration with dark-on-light.

The fix is well-established but widely ignored: drop the foreground type to 85-90% opacity, or shift it off pure white toward a very slightly warm or cool off-white. Simultaneously, lift the background off pure black.

This small adjustment is the difference between a dark mode that feels considered and one that feels like a developer set `background: #000; color: #fff;` at 11pm.

## Weight and spacing behave differently

Light type on dark backgrounds appears heavier than the same weight reversed. A body weight (400) that reads comfortably in black on white can read as medium (500) on dark.

This has two implications: you often need to reduce weight by one step when reversing out, and you need to track letter spacing more loosely to prevent the letterforms from appearing to merge at small sizes.

These adjustments are small — a reduction from 400 to 300, a tracking increase of 3-5 units — but the difference between applying them and not is the difference between polished and approximate.

## Color on dark

Saturated colors that work well on light backgrounds often become aggressive on dark ones. The same hex value reads differently against dark because the contrast ratio shifts, and colors that were balanced become dominant.

We calibrate our color palettes specifically for dark-background use: typically slightly desaturated, slightly more luminous. Not different colors, but dark-optimized variants of the same colors.

This has to happen at the palette definition stage, not as a post-hoc dark mode toggle.

## When dark is right

Dark-background design isn't universally appropriate, whatever current trends suggest. It carries specific associations: cinema, night, technology, premium products that exist after dark (spirits, fine dining, nightlife).

For brands that need to communicate warmth, transparency, daylight energy, or approachability, dark mode as a primary presentation often works against the brand character.

As with every design decision: the question isn't "does this look good?" It's "does this serve the brand?"
