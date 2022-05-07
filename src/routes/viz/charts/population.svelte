<script lang="ts">

    import { onMount } from "svelte";

    import type { City } from "../../../models/city";

    import { scaleBand, scaleLinear, type ScaleBand, type ScaleLinear} from "d3-scale";
    import { max } from "d3-array";
    import { format } from "d3-format";
    import gsap from "gsap";

    import CitiesStore from "../../../stores/cities";

    let x: ScaleBand<string>;
    let y: ScaleLinear<number,number,undefined>;
    let data: City[] = [];

    const m = {left: 20, right: 20, top: 20, bottom: 20};

    const w = 800 - m.left - m.right;
    const h = 400 - m.top - m.bottom;

    const f = format(",");

    onMount(() => {

        CitiesStore.subscribe(d => {
            data = d;
        })

        x = scaleBand()
                .domain(data.map(d => d.name))
                .range([0, w])
                .padding(0.1);
        
        y = scaleLinear()
                .domain([0, max(data, d => d.populationCity) * 1.2])
                .range([h, 0]);

        const tl = gsap.timeline();

        tl.from(".marks", {
            duration: 2,
            scaleY: 0,
            transformOrigin: "bottom",
            ease: "power4.out",
            stagger: {
                amount: .5,
            }
        }).from(".labels", {
            duration: .2,
            opacity: 0
        })
    })

</script>

<div class="p-2 m-2">
    <div>
        <svg width="100%" height="100%" viewBox="0 0 {w + m.left + m.right} {h + m.top + m.bottom}">
            <g transform="translate({m.left},{m.top})">
                <!-- Marks -->
                <g class="marks">
                    {#each data as d}
                        <rect
                            class="marks fill-primaryLight hover:fill-primary"
                            x={x(d.name)}
                            y={y(d.populationCity)}
                            width={x.bandwidth()}
                            height={h - y(d.populationCity)}>
                        </rect>
                    {/each}
                </g>

                <g class="labels">
                    {#each data as d}
                    <text
                    class="label"
                    x={x(d.name)}
                    dx={x.bandwidth() / 2}
                    y={y(d.populationCity) - 7}
                    text-anchor="middle"
                    >{f(d.populationCity)}
                </text>
                    {/each}
                </g>
                <!-- Axis X -->
                <g transform="translate(0,{h})">
                    <line x2="{w}" class="stroke-2 stroke-grayDark"/>
                    {#each data as d}
                        <g transform="translate({x(d.name)}, 0)">
                            <text y="16" text-anchor="middle" dx={x.bandwidth() / 2}>{d.name}</text>
                        </g>
                    {/each}
                </g>

                <!-- Axis Y -->
                <g>
                    <line y2={h} class="stroke-2 stroke-grayDark"/>
                </g>
            </g>
        </svg>
    </div>
</div>
