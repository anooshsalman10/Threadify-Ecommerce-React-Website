import p_img1_1 from './p_img1_1.png';
import p_img1_2 from './p_img1_2.png';
import p_img1_3 from './p_img1_3.png';
import p_img1_4 from './p_img1_4.png';
import logo1 from './logo1.png';
import hero_img from './hero_img.jpg';
import p_img2 from './p_img2.jpg';
import p_img3 from './p_img3.jpg';
import p_img4 from './p_img4.jpg';
import exchange_icon from './exchange_icon.png';
import quality_icon from './quality_icon.png';
import customer_icon from './customer_icon.png';
import arrow_down from './arrow_down.png';
import search_icon from './search_icon.png';
import cross_icon from './cross_icon.png';
import star_icon from './star_icon.png';


// exported these images through object...
export const Assets= {
    logo1,
    p_img1_1,
    p_img1_2,
    p_img1_3,
    p_img1_4,
    hero_img,
    p_img2,
    p_img3,
    p_img4,
    exchange_icon,
    quality_icon,
    customer_icon,
    arrow_down,
    search_icon,
    cross_icon,
    star_icon,
}

export const products =[
    {
        _id:"aaaaa",
        name: "Women's Cotton Top",
        description:"A lightweight, stylish and breatheable top which is perfect for summers"    ,
        price:100  ,
        image: [p_img2], // the reason we used array is that we can use multiple images here...
        category:"Women",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:true
    },

    {
        _id:"aaaab",
        name: "Men's Cotton T-shirt",
        description:"A lightweight, stylish and breatheable T-shirt which is perfect for summers"    ,
        price:150,
        image: [p_img1_1,p_img1_2,p_img1_3,p_img1_4], // the reason we used array is that we can use multiple images here...
        category:"Men",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:true
    },

    {
        _id:"aaaac",
        name: "Boy's T-shirt",
        description:"A lightweight, stylish and breatheable T-shirt which is perfect for summers"    ,
        price:250,
        image: [p_img4], // the reason we used array is that we can use multiple images here...
        category:"Men",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:true
    },

    {
        _id:"aaaad",
        name: "Girl's Light Cotton Shirt",
        description:"A lightweight, stylish and breatheable T-shirt which is perfect for summers"    ,
        price:250,
        image: [p_img3], 
        category:"Men",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:true
    },

    {
        _id:"aaaae",
        name: "Women's Dress",
        description:"A lightweight, stylish and breatheable T-shirt which is perfect for summers"    ,
        price:350,
        image: [p_img1_1,p_img1_2,p_img1_3,p_img1_4], // the reason we used array is that we can use multiple images here...
        category:"Men",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:false
    },

    {
        _id:"aaaaf",
        name: "Men's Light Breathable Apparel",
        description:"A lightweight, stylish and breatheable T-shirt which is perfect for summers"    ,
        price:300,
        image: [p_img1_1,p_img1_2,p_img1_3,p_img1_4], // the reason we used array is that we can use multiple images here...
        category:"Men",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:false
    },

    {
        _id:"aaaag",
        name: "Girl's Light Breathable Dress",
        description:"A lightweight, stylish and breatheable T-shirt which is perfect for summers",
        price:250,
        image: [p_img1_1,p_img1_2,p_img1_3,p_img1_4], // the reason we used array is that we can use multiple images here...
        category:"Men",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:false
    },

    {
        _id:"aaaah",
        name: "Boy's Lightweight Garment",
        description:"A lightweight, stylish and breatheable T-shirt which is perfect for summers"    ,
        price:350,
        image: [p_img1_1,p_img1_2,p_img1_3,p_img1_4], // the reason we used array is that we can use multiple images here...
        category:"Men",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:false
    },

    {
        _id:"aaaai",
        name: "Women's Trousers",
        description:"Lightweight, stylish and breatheable trousers, which are perfect for summers",
        price:200,
        image: [p_img1_1,p_img1_2,p_img1_3,p_img1_4], // the reason we used array is that we can use multiple images here...
        category:"Men",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:true
    },

    {
        _id:"aaaaj",
        name: "Men's Trouser",
        description:"Lightweight, stylish and breatheable trousers, which are perfect for summers",
        price:150,
        image: [p_img1_1,p_img1_2,p_img1_3,p_img1_4], // the reason we used array is that we can use multiple images here...
        category:"Men",
        subcategory:"Topwear",
        sizes:["S","M","L"],
        date:1716621345448,
        bestseller:true
    },
]