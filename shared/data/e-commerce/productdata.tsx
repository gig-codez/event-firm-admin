
export const Productdata = [
    {
    id:1,
    ProductId: "Women's Red Dress",
    Product1: "../../../assets/images/pngs/2.png",
    Product2:  "../../../assets/images/pngs/1.png",
    Productpriceold: "$125.00",
    Productdiscountnew: "50.00",
    Productdiscount: "-33%",
    Productdiscounttext: "success",
    quatity:1
  },
  {
    id:2,
    ProductId: "Casual Wear Top",
    Product1: "../../../assets/images/pngs/4.png",
    Product2: "../../../assets/images/pngs/3.png",
    Productpriceold: "$125.00",
    Productdiscountnew: "120.00",
    quatity:1
  },
  {
    id:3,
    ProductId: "Party Wear Black Top",
    Product1: "../../../assets/images/pngs/7.png",
    Product2: "../../../assets/images/pngs/8.png",
    Productpriceold: "$125.00",
    Productdiscountnew: "110.00",
    Productdiscount: "-50%",
    Productdiscounttext: "info",
    quatity:1
  },
  {
    id:4,
    ProductId: "Women's Rayon top",
    Product1:  "../../../assets/images/pngs/9.png",
    Product2: "../../../assets/images/pngs/10.png",
    Productpriceold: "$125.00",
    Productdiscountnew: "120.00",
    quatity:1
  },
  {
    id:5,
    ProductId: "Long Floral Tunic Tops",
    Product1: "../../../assets/images/pngs/11.png",
    Product2: "../../../assets/images/pngs/12.png",
    Productpriceold: "$125.00",
    Productdiscountnew: "60.00",
    Productdiscount: "-40%",
    Productdiscounttext: "danger",
    quatity:1
  },
  {
    id:6,
    ProductId: "Western Skirt & Top",
    Product1: "../../../assets/images/pngs/2.png",
    Product2: "../../../assets/images/pngs/1.png",
    Productpriceold: "$125.00",
    Productdiscountnew: "90.00",
    quatity:1
  },
  {
    id:7,
    ProductId: "Party Wear Fancy Top",
    Product1: "../../../assets/images/pngs/5.png",
    Product2:"../../../assets/images/pngs/6.png",
    Productpriceold: "$125.00",
    Productdiscountnew: "104.00",
    Productdiscount: "-43%",
    Productdiscounttext: "warning",
    quatity:1
  },
  {
    id:8,
    ProductId: "Long Slit Full Sleeve",
    Product1: "../../../assets/images/pngs/13.png",
    Product2: "../../../assets/images/pngs/31.png",
    Productpriceold: "$125.00",
    Productdiscountnew: "120.00",
    quatity:1
  },
  {
    id:9,
    ProductId: "Long Floral Tunic Tops",
    Product1: "../../../assets/images/pngs/33.png",
    Product2: "../../../assets/images/pngs/32.png",
    Productpriceold: "$125.00",
    Productdiscountnew: "110.00",
    quatity:1
  }]


  export const FindeWithId = (id:number)=>{
    const filterdata = Productdata.filter((ele)=>{
        return ele.id == id
    })
    return filterdata
  }

  export const DeleteWithId = (id:number)=>{
    const filterdata = Productdata.filter((ele)=>{
        return ele.id != id
    })
    // console.log(filterdata);
    return filterdata
  }