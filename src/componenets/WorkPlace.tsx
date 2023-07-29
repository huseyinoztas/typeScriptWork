  // determine the type of variables
  // let name: string = "Hüseyin";
  //   let age: number = 30;
  //   let done: boolean = true; // boolean type
  // let trial: any = "khklasdlj" herhangi bir type alabilir
  // let trial: number | string = number yada string olabilir


  // TYPE Kullanımı
  // type obj = {
  //   name:string,
  //   age:number,
  //   done:boolean//done? şeklinde yazarsak opsiyonel hale gelir.
  // }
  //  tpye ı belirlenen objde bütün alanlar girilmek zorundadır
  // aksit taktirde uyarı alırsınız hata verir.
  

  // type objTwo = {
  //   name: string,
  //   age:number,
  //   done?:boolean,
  //   accept?:boolean
  // }

  // let obj:objTwo = {
  //   name: "hüseyin",
  //   age:30,
  //   done:true

  // }

  // INTERFACE Kullanımı
//   interface obj  {
//     name:string,
//     age:number,
//     done:boolean//done? şeklinde yazarsak opsiyonel hale gelir.
//   }

//   typeları interface kullanarak kalıtım yoluyla aktarabiliyoruz
//   interface objTwo extends obj  {
//     accept?:boolean
//   }

//   let obj:objTwo = {
//     name: "hüseyin",
//     age:30,
//     done:true

//   }

// statelerde type tanımlaması <> ile yapılır
// const [todo, setTodo] = useState<string>('') 
export {}