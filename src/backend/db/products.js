import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/18/logo.png",
    name: "Linux Fundamentals",
    author: "Cry0l1t3, Knightmare",
    price: 219,
    isBestSeller: true,
    category: "General",
    rating: 4.6
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/34/logo.png",
    name: "Introduction to Networking",
    author: "Cry0l1t3, ippsec-3",
    price: 250,
    isBestSeller: false,
    category: "General",
    rating: 4
  },

  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/25/logo.png",
    name: "Kerberos Attacks",
    author: "pixis",
    price: 400,
    isBestSeller: false,
    category: "Offensive",
    rating: 2
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/21/logo.png",
    name: "Introduction to Bash Scripting",
    author: "007JamesBond",
    price: 390,
    isBestSeller: true,
    category: "General",
    rating: 4.8
  },

  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/211/logo.png",
    name: "Security Monitoring and SIEM Fundamentals",
    author: "Slavi Parpulev",
    price: 600,
    isBestSeller: false,
    category: "Defensive",
    rating: 4
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/214/logo.png",
    name: "Intro to Threat hunting & Hunting with Elastic",
    author: "GodFather",
    price: 350,
    isBestSeller: false,
    category: "Defensive",
    rating: 2
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/216/logo.png",
    name: "Windows event logs & Finding evil",
    author: "Robin Sharma",
    price: 119,
    isBestSeller: false,
    category: "Defensive",
    rating: 3
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/20/logo.png",
    name: "Cracking Passwords with HASHCAT",
    author: "mrb3n, ippsec-3, MinatoTW",
    price: 157,
    isBestSeller: false,
    category: "Offensive",
    rating: 3
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/31/logo.png",
    name: "Stack Based BufferOverflows on Linux x86 ",
    author: "$$ns",
    price: 163,
    isBestSeller: false,
    category: "Offensive",
    rating: 2.5
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/176/logo.png",
    name: "Windows Attacks and Defence",
    author: "Johnylooper",
    price: 699,
    isBestSeller: false,
    category: "Defensive",
    rating: 4
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/85/logo.png",
    name: "Intro to Assembly Language",
    author: "21y4d",
    price: 399,
    isBestSeller: false,
    category: "General",
    rating: 3.5
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/27/logo.png",
    name: "DNS Enumeration using Python",
    author: "Cry0l1t3",
    price: 243,
    isBestSeller: false,
    category: "General",
    rating: 1
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/41/logo.png",
    name: "Javascript Deobfuscation",
    author: "M0jis",
    price: 799,
    isBestSeller: false,
    category: "Defensive",
    rating: 4
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/22/logo.png",
    name: "Active Directory LDAP",
    author: "W0rm32",
    price: 999,
    isBestSeller: true,
    category: "Offensive",
    rating: 5
  },
  {
    _id: uuid(),
    img: "https://academy.hackthebox.com/storage/modules/112/logo.png",
    name: "Footprinting",
    author: "L1nkesh",
    price: 800,
    isBestSeller: false,
    category: "Offensive",
    rating: 4.8
  }
];
