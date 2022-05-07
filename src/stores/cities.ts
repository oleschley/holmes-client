import { readable } from "svelte/store";

import data from "../data/cities.json";

const CitiesStore = readable(data);

export default CitiesStore;