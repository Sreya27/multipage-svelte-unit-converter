import {writable} from "svelte/store";

export const tableData = writable([
    {
        id: 0,
        name: "Length",
        from: "Centimeters",
        to: "Inches",
        data: [
            [1, 0.3937008],
            [2, 0.7874016],
            [3, 1.1811024],
            [4, 1.5748031],
            [5, 1.5748031],
            [6, 2.3622047],
            [7, 2.7559055],
            [8, 3.1496063],
            [9, 3.5433071],
            [10, 3.9370079],
            [11, 4.330708],
            [12, 4.7244094],
            [13, 5.1181102],
            [14, 5.511811],
            [15, 5.511811]
        ],
        units: ["Meters","Kilometers","Centimeters","Millimeters","Nanometers","Micrometers","Miles","Nautical miles","Inches","Yards","Feet"],
    },
    
    {
        id: 1,
        name: "Temperature",
        from: "Celsius",
        to: "Farenheit",
        data: [
            [1, 0.3937008],
            [2, 0.7874016],
            [3, 1.1811024],
            [4, 1.5748031],
            [5, 1.5748031],
            [6, 2.3622047],
            [7, 2.7559055],
            [8, 3.1496063],
            [9, 3.5433071],
            [10, 3.9370079],
            [11, 4.330708],
            [12, 4.7244094],
            [13, 5.1181102],
            [14, 5.511811],
            [15, 5.511811]
        ],
        units: ["Meters","Kilometers","Centimeters","Millimeters","Nanometers","Micrometers","Miles","Nautical miles","Inches","Yards","Feet"],
    },

    {
        id: 2,
        name: "Volume",
        from: "Litres",
        to: "Gallons",
        data: [
            [1, 0.3937008],
            [2, 0.7874016],
            [3, 1.1811024],
            [4, 1.5748031],
            [5, 1.5748031],
            [6, 2.3622047],
            [7, 2.7559055],
            [8, 3.1496063],
            [9, 3.5433071],
            [10, 3.9370079],
            [11, 4.330708],
            [12, 4.7244094],
            [13, 5.1181102],
            [14, 5.511811],
            [15, 5.511811]
        ],
        units: ["Meters","Kilometers","Centimeters","Millimeters","Nanometers","Micrometers","Miles","Nautical miles","Inches","Yards","Feet"],
    },

    {
        id: 3,
        name: "Weight",
        from: "Kilograms",
        to: "Pounds",
        data: [
            [1, 0.3937008],
            [2, 0.7874016],
            [3, 1.1811024],
            [4, 1.5748031],
            [5, 1.5748031],
            [6, 2.3622047],
            [7, 2.7559055],
            [8, 3.1496063],
            [9, 3.5433071],
            [10, 3.9370079],
            [11, 4.330708],
            [12, 4.7244094],
            [13, 5.1181102],
            [14, 5.511811],
            [15, 5.511811]
        ],
        units: ["Meters","Kilometers","Centimeters","Millimeters","Nanometers","Micrometers","Miles","Nautical miles","Inches","Yards","Feet"],
    },

    {
        id: 4,
        name: "Time",
        from: "Hours",
        to: "Seconds",
        data: [
            [1, 0.3937008],
            [2, 0.7874016],
            [3, 1.1811024],
            [4, 1.5748031],
            [5, 1.5748031],
            [6, 2.3622047],
            [7, 2.7559055],
            [8, 3.1496063],
            [9, 3.5433071],
            [10, 3.9370079],
            [11, 4.330708],
            [12, 4.7244094],
            [13, 5.1181102],
            [14, 5.511811],
            [15, 5.511811]
        ],
        units: ["Meters","Kilometers","Centimeters","Millimeters","Nanometers","Micrometers","Miles","Nautical miles","Inches","Yards","Feet"],
    }
]);

