import Product from "../product/Product";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.container} id="products">
      <p className={styles.title}>Products</p>

      <p className={styles.heading}>Ortho Care</p>
      <div className={styles.productsContainer}>
        {orthoProducts.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>

      <p className={styles.heading}>CD Division</p>
      <div className={styles.productsContainer}>
        {cdProducts.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>

      <p className={styles.heading}>General</p>
      <div className={styles.productsContainer}>
        {generalProducts.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;

const orthoProducts = [
  {
    name: "Aflarose",
    description: "Aflapin, Rosehip Extract, Devils Claw, Vitamin C Tablets",
    imagePath: "/images/products/orthoCare/aflarose.jpg",
    category: "orthoCare",
    range: "aflarose",
    id: 1,
  },
  {
    name: "Aflarose Plus",
    description:
      "Veg Collagen peptide, Type II, Nano Curcumin, Rosehip extract, AKBA 20%, Aflapin Extract, Hyaluranic Acid, Vitamin C, Devil's claw, Veg Glucosamine Sulphate & Veg Chondroitin Sulphate Tablets",
    imagePath: "/images/products/orthoCare/aflarose-plus.jpg",
    category: "orthoCare",
    range: "aflarose",
    id: 2,
  },
  {
    name: "Clowefen P",
    description: "Aceclofenac & Paracetamol Tablets",
    imagePath: "/images/products/orthoCare/clowefen-rage-p.jpg",
    category: "orthoCare",
    range: "clowefen",
    id: 3,
  },
  {
    name: "Clowefen SP",
    description: "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
    imagePath: "/images/products/orthoCare/Clowefen-range-SP.jpg",
    category: "orthoCare",
    range: "clowefen",
    id: 4,
  },
  {
    name: "Clowefen TH",
    description: "Acerclofenac & Thiocolchicloside Tablets",
    imagePath: "/images/products/orthoCare/Clowefen-range-TH.jpg",
    category: "orthoCare",
    range: "clowefen",
    id: 5,
  },
  {
    name: "Olmicium",
    description: "Calcitriol, CCM, Folic Acid, Methylcobalamin, Pyridoxine Tablets",
    imagePath: "/images/products/orthoCare/Olmicium.jpg",
    category: "orthoCare",
    range: "olmicium",
    id: 6,
  },
  {
    name: "Olmicium 60K",
    description: "Cholecalciferol Chewable Tablets 60,000 I.U.",
    imagePath: "/images/products/orthoCare/Olmicium-60K.jpg",
    category: "orthoCare",
    range: "olmicium",
    id: 7,
  },
  {
    name: "Olmicox 90",
    description: "Etoricoxib Tablets IP 90 mg.",
    imagePath: "/images/products/orthoCare/olmicox-range-90.jpg",
    category: "orthoCare",
    range: "olmicox",
    id: 8,
  },
  {
    name: "Olmicox 120",
    description: "Etoricoxib Tablets IP 120 mg.",
    imagePath: "/images/products/orthoCare/Olmicox-range-120.jpg",
    category: "orthoCare",
    range: "olmicox",
    id: 9,
  },
  {
    name: "Olmicox TH",
    description: "Thicolchicoside & Etoricoxib Tablets",
    imagePath: "/images/products/orthoCare/Olmicox-range-TH.jpg",
    category: "orthoCare",
    range: "olmicox",
    id: 10,
  },
  {
    name: "Olwecef 500",
    description: "Cefuroxime Axetil Tablets I.P.",
    imagePath: "/images/products/orthoCare/olwecef-500.jpg",
    category: "orthoCare",
    range: "olwecef",
    id: 11,
  },
  {
    name: "Wenofast Gel",
    description: "Diclofenac Diethylamine, Thiocolchicoside, Olenum lini, Methyl Salicylate & Menthol Gel",
    imagePath: "/images/products/orthoCare/wenofast-gel.jpg",
    category: "orthoCare",
    range: "wenofast",
    id: 12,
  },
  {
    name: "Wenosis",
    description: "Dalbergia Sissoo, Cissus Quadrangularis Tablets",
    imagePath: "/images/products/orthoCare/Wenosis.jpg",
    category: "orthoCare",
    range: "wenosis",
    id: 13,
  },
  {
    name: "Wetamol",
    description: "Tramadol & Paracetamol Tablets",
    imagePath: "/images/products/orthoCare/wetamol.jpg",
    category: "orthoCare",
    range: "wetamol",
    id: 14,
  },
];

const cdProducts = [
  {
    name: "Finecobal",
    description: "Mecobalamin, Alpha Lipoic, Benfotiamine, Vitamin D3 & Folic Acid Tablets",
    imagePath: "/images/products/cdCare/finecobal.jpg",
    category: "cdCare",
    range: "finecobal",
    id: 15,
  },
  {
    name: "Olwepride 1/500",
    description: "Glimepiride & Metfomin Hydrochloride Prolonged Release Tablets IP",
    imagePath: "/images/products/cdCare/olwepride-range-1-500.jpg",
    category: "cdCare",
    range: "olwepride",
    id: 16,
  },
  {
    name: "Olwepride 1/500/0.2",
    description: "Glimpiride, Voglibose & Metformin HCI (SR) Tablets",
    imagePath: "/images/products/cdCare/olwepride-range-1-500-02.jpg",
    category: "cdCare",
    range: "olwepride",
    id: 17,
  },
  {
    name: "Olwepride 2/1000",
    description: "Glimepiride & Metfomin HCI (SR) Tablets",
    imagePath: "/images/products/cdCare/olwepride-range-2-1000.jpg",
    category: "cdCare",
    range: "olwepride",
    id: 18,
  },
  {
    name: "Olwetel 40",
    description: "Telmisartan Tablets IP",
    imagePath: "/images/products/cdCare/olwetel-range-40.jpg",
    category: "cdCare",
    range: "olwetel",
    id: 19,
  },
  {
    name: "Olwetel A40",
    description: "Telmisartan & Amlodipine Tablets I.P.",
    imagePath: "/images/products/cdCare/olwetel-range-A40.jpg",
    category: "cdCare",
    range: "olwetel",
    id: 20,
  },
  {
    name: "Olwetel H40",
    description: "Telmisartan & Hydrochlorothianzide Tablets I.P.",
    imagePath: "/images/products/cdCare/olwetel-range-H40.jpg",
    category: "cdCare",
    range: "olwetel",
    id: 21,
  },
  {
    name: "Olwetel Trio",
    description: "Telmisartan, Amlodipine & Hydrochlorothiazide Tablets",
    imagePath: "/images/products/cdCare/olwetel-range-trio.jpg",
    category: "cdCare",
    range: "olwetel",
    id: 22,
  },
  {
    name: "Rosawen 10",
    description: "Rosuvastatin Tablets I.P.",
    imagePath: "/images/products/cdCare/rosawen-range-10.jpg",
    category: "cdCare",
    range: "rosawen",
    id: 23,
  },
  {
    name: "Rosawen 20",
    description: "Rosuvastatin Tablets I.P.",
    imagePath: "/images/products/cdCare/rosawen-range-20.jpg",
    category: "cdCare",
    range: "rosawen",
    id: 24,
  },
  {
    name: "Rosawen Gold 10",
    description: "Rosuvastatin 10 mg, Aspirin 75 mg, & Clopidogrel 75mg Capsules",
    imagePath: "/images/products/cdCare/rosawen-range-gold-10.jpg",
    category: "cdCare",
    range: "rosawen",
    id: 25,
  },
];

const generalProducts = [
  {
    name: "Joysleep",
    description: "Escitalopram & Clonazepam Tablets",
    imagePath: "/images/products/generalRange/Joysleep.jpg",
    category: "generalRange",
    range: "joysleep",
    id: 26,
  },
  {
    name: "Olwedom-D",
    description: "Rabeprazole (Enteric Coated) & Domperidone (Sustained Release) Capsules",
    imagePath: "/images/products/generalRange/Olwedom-D.jpg",
    category: "generalRange",
    range: "olwedom",
    id: 27,
  },
  {
    name: "Olwedom L",
    description: "Rabeprazole Sodium Enteric Coated & Levosulpiride Sustained Release Capsule",
    imagePath: "/images/products/generalRange/Olwedom-L.jpg",
    category: "generalRange",
    range: "olwedom",
    id: 28,
  },
  {
    name: "Triowen",
    description: "Trypsin, Bromelain & Rutoside Trihydrate Tablets",
    imagePath: "/images/products/generalRange/triowen.jpg",
    category: "generalRange",
    range: "triowen",
    id: 29,
  },
  {
    name: "Triowen D",
    description: "Trypsin, Bromelain, Rutoside Trihydrate & Diclofenac Sodium Tablets",
    imagePath: "/images/products/generalRange/Triowen-D.jpg",
    category: "generalRange",
    range: "triowen",
    id: 30,
  },
];
