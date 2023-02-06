import React from "react";
import MenuItem from "./MenuItem";
import SpecialItem from "./SpecialItem";

const menu = {
  menuItens: [
    { name: "Chile Relleno", price: "3.99" },
    { name: "Quesa Birria", price: "2.49" },
    { name: "torta", price: "7.49" },
    { name: "Burrito", price: "6.99" },
    { name: "Taco-corn tortilla", price: "2.25" },
    { name: "taco-flour tortilla", price: "2.50" },
    { name: "Gordita", price: "3.49" },
    { name: "Quesadilla", price: "7.99" },
    { name: "sope", price: "3.99" },
    { name: "flauta", price: "1.50" },
    { name: "costillas", price: "11.99" },
  ],
  dailySpecials: [
    { name: "consome + 2 tacos + drink", day: "monday", price: "9.99" },
    {
      name: "costilla + rice/beans + 4 tortillas + drink ",
      day: "tuesday",
      price: "8.49",
    },
    {
      name: "chile relleno + drink",
      day: "wednesday",
      price: "8.49",
    },
    { name: "caldo de res", day: "thursday", price: "8.99" },
    {
      name: "1LB. CARNITAS + 12 TORTILLAS + RICE/BEANS + 2 DRINKS",
      day: "friday",
      price: "21.99",
    },
    { name: "MONTALAYO X POUND", day: "saturday/sunday", price: "19.99" },
  ],
  breakfast: [
    { name: "consome", price: "9.99" },
    { name: "menudo", price: "10.99" },
    { name: "costilla en mole", price: "8.99" },
    { name: "chicharron", price: "8.99" },
    { name: "platillos", price: "6.99" },
    { name: "burritos", price: "6.99" },
    { name: "green/red chilaquiles", price: "8.99" },
    { name: "gorditas", price: "3.49" },
    { name: "tacos", price: "2.25" },
  ],
  drinks: [
    { name: "mexican soda - glasss", price: "2.99" },
    { name: "can soda", price: "0.99" },
    { name: "sangria - sidral", price: "1.99" },
    { name: "mineral water", price: "1.99" },
  ],
};

const Menu = () => {
  return (
    <div id="menu" className="mt-8">
      <h1 className="text-[#483729] uppercase text-center text-4xl font-extrabold font-libre p-4">
        menu
      </h1>
      <h2 className="text-center p-4 md:max-w-[60%] m-auto">
        Founded in 2007 starting from a food table, then switched to a food
        truck and in January 2020 we opened our Restaurant "EL GUERO" We bring
        to the table the best of all the places of Carnitas and Barbacoa around
        the city. Their unique crafting skills involve premium meats, fresh
        vegetables and the best ingredients.
      </h2>
      <span className="pt-8 pb-4 text-4xl uppercase text-center underline block font-extrabold text-[#483729] decoration-yellow-500">
        main menu
      </span>
      {menu.menuItens.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
      <span className="pt-8 pb-4 text-3xl uppercase text-center underline block font-extrabold text-[#483729] decoration-yellow-500">
        daily specials
      </span>
      {menu.dailySpecials.map((item, index) => (
        <SpecialItem
          key={index}
          name={item.name}
          price={item.price}
          day={item.day}
        />
      ))}
      <span className="pt-8 pb-4 text-3xl uppercase text-center underline block font-extrabold text-[#483729] decoration-yellow-500">
        Breakfast 7am-11am
      </span>
      {menu.breakfast.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
      <span className="pt-8 pb-4 text-3xl uppercase text-center underline block font-extrabold text-[#483729] decoration-yellow-500">
        drinks
      </span>
      {menu.drinks.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Menu;
