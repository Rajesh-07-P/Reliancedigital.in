let products = [
  {
    title:
      "LG 1.5 Ton 4 Star Inverter Window AC, PW-Q18WUXA (Copper Condenser, Top Air Discharge, 2022 Launch)",
    images: [
      "https://www.reliancedigital.in/medias/LG-PW-Q18WUXA-Air-Conditioner-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDk4M3xpbWFnZS9qcGVnfGltYWdlcy9oYzYvaDE1Lzk3NzU4NzA1MDkwODYuanBnfGM0NDMzYTNlNjg0MDhiMWU0YTY4MzcyYjIzZGRhNzg0MGQ0NmRmMzYxNGYwNTc2MDhiODA5OTBiNmMzNDllM2M",
    ],
    brand: "LG",
    category: "Air Conditioners",
    price: 35990,
    mrp: 60990,
    discount: 41,
  },
  {
    title:
      "Whirlpool 265 L 2 Star Frost Free Double Door Refrigerator(NEO DF278PRM, Arctic Steel, NeoFresh, Up To 12 Days Of Garden Freshness)",
    images: [
      "https://www.reliancedigital.in/medias/Whirlpool-DoubleDoor-Refrigerator-491666431-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjgyMHxpbWFnZS9qcGVnfGltYWdlcy9oOTYvaDAzLzkzNTkxOTQ2ODU0NzAuanBnfGRjOWY5OTIzOGQ1NDk2ZDI3N2NhZTAxOTM2NDc5M2E5ODU4Y2Y4NGRhOTIyNjM4ZmE2NjM2MTU5Y2IxYzNiN2M",
    ],
    brand: "Whirlpool",
    category: "Refrigerators",
    price: 25490,
    mrp: 31750,
    discount: 20,
  },
  {
    title: "Kelvinator Alps KCT-A300 - 30 Litres Tower Air Cooler",
    images: [
      "https://www.reliancedigital.in/medias/Kelvinator-KCT-A300-AirCooler-491604448-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODk2MzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDUxL2hiNy85Nzc2NzUwNDYwOTU4LmpwZ3w3ZGIxNWRmNTk0MTI2MTE4N2Y1OGIyNGViY2YzODEwOTA2NjljYmFiZWFiMzczOTkzY2IwOGUzOGQ5MWQ3NDU4",
    ],
    brand: "Kelvinator",
    category: "Air Coolers",
    price: 7490,
    mrp: 11990,
    discount: 38,
  },
  {
    title:
      "BPL 500W Centrifugal Juicer with Wide Fruit Inlet Tray, 2 Speeds & Pulse function, Easy to Clean, 2 Years Warranty, Peach",
    images: [
      "https://www.reliancedigital.in/medias/BPL-BJC00150-Centrifugal-Juicer-491903046-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzc1MTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDY0L2gyNy85NjEzNTc4NzY0MzE4LmpwZ3xkZTI4YjYyYjUyMjVlNzc5OTQzYTE3ZTdiNWU4OGY3MjU2YWZmMTk3N2Q1NjNjNjNkZjBlNGVhOTc3OTUyZjlh",
    ],
    brand: "BPL",
    category: "Wet Grinders",
    price: 1599,
    mrp: 4799,
    discount: 67,
  },
  {
    title:
      "LG 260 L 2 Star Inverter Frost Free Double Door Refrigerator(GL-N292DDSY DAZZLE STEEL)",
    images: [
      "https://www.reliancedigital.in/medias/LG-GL-N292DDSY-Refrigerator-491539090-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjg1M3xpbWFnZS9qcGVnfGltYWdlcy9oY2EvaGI5LzkxMTI1NDg5NjY0MzAuanBnfGE5NDRiMjQ5MjA4YzUzZDAxZDdiMTgzMWE2MTJiODhkZjE3OWQ3YWM2YjQyNTc1ODM4N2MzZjNmNmQyODMzMGU",
    ],
    brand: "LG",
    category: "Refrigerators",
    price: 25990,
    mrp: 30999,
    discount: 16,
  },
  {
    title:
      "Orient Electric Ujala Energy Saver 1200 mm 3 Blade Ceiling Fan, Brown",
    images: [
      "https://www.reliancedigital.in/medias/Orient-Electric-3134817112010-Fan-493627369-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNzM0MHxpbWFnZS9qcGVnfGltYWdlcy9oODcvaDY5Lzk5MzY1MDg1NTExOTguanBnfGVkMWQ3YjUwZGI1NGU4NDU5M2M4NGViNzYwOWI5MjFlYWJmNjIzMDE4Y2U5OTdhOWZmZjVhZjAyZWI1NTY0ZmY",
    ],
    brand: "Orient",
    category: "Fans",
    price: 1499,
    mrp: 2855,
    discount: 47,
  },
  {
    title:
      "Maharaja Whiteline Mark-1 JX-100 2 Jar Juicer Mixer Grinder, White/Red",
    images: [
      "https://www.reliancedigital.in/medias/Maharaja-JX-100-Juicer-Mixer-Grinder-491959200-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyOTgwODB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY3L2hiYi85ODA3MDk5NTI3MTk4LmpwZ3xlZjllNWE0ODlmYjdkNjIxYjZhMGNlZGFkZWU1NjQwOTEwY2Q4NjNlNzI5N2VlMjI4NzZkNzM0NDY2NmFiNTA4",
    ],
    brand: "Maharaja",
    category: "Wet Grinders",
    price: 2649,
    mrp: 3499,
    discount: 24,
  },
  {
    title:
      "Samsung 1.5 Ton 3 Star AR18BY3YATA Inverter, Split AC, HD Filter, 2 Way Swing, Floral Design, 5 in 1 Convertible (2022 Launch)",
    images: [
      "https://www.reliancedigital.in/medias/SAMSUNG-AR18BY3YATA-Split-Air-conditioner-581026749-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MDY4NXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDM1Lzk3ODUxMTQ2NTY3OTguanBnfDc3MDk5OTU5MjEyMzY1ZWY4MDRkMTk4MTQ4NGRmZDU5YWU0OTIzZWEyZDliYTEyOWM4MmJlZDFjM2FiNjkxMjE",
    ],
    brand: "Samsung",
    category: "Air Conditioners",
    price: 36990,
    mrp: 58990,
    discount: 37,
  },
  {
    title:
      "DAIKIN 1.5 Ton 5 Star Inverter Split AC MTKM50U (100 Percent Copper,High ISEER, 3D-Airflow, PM2.5 Air Purifying filter, Dew clean technology, 52 Feet Air throw, 2022 Launch)",
    images: [
      "https://www.reliancedigital.in/medias/Daikin-MTKM50U-Air-Conditioners-581026915-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDI2NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaGFmL2g1ZS85ODA0MDM5MzU2NDQ2LmpwZ3w5M2MwZTNmMzk1MDg2ZmNiOWQ4Zjc3YzIzYTE3Y2NlNzdhOTEyYzY1NWNlMTIyYTZiOTY4YmI2MTg4MGNiNmQ4)",
    ],
    brand: "DAIKIN",
    category: "Air Conditioners",
    price: 46490,
    mrp: 67200,
    discount: 31,
  },
];

export default products;

// {
//     title:"",
//     images:[""],
//     brand:"",
//     category:"",
//     price:,
//     mrp:,
//     discount:,
// }
