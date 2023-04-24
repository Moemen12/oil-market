const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const image = params.get("image");
const Oilname = params.get("name");

const imageElement = document.getElementById("my-image");
imageElement.setAttribute("src", image);

const nameElement = document.getElementById("my-name");
nameElement.textContent = Oilname;

let ItemDescription = {
  one: "يوصى باستخدامه في علب التروس الأوتوماتيكية لسيارات الركاب والمركبات التجارية التي تتطلب زيت جودة ATF Type Dexron-III H / G / F أو Dexron-II E أو FORD MERCON V. إنه مصمم لمعظم علب التروس الأوتوماتيكية لشركة جنرال موتورز وشركة فورد والعلامات التجارية الأخرى المصنعة حتى عام 2006.",

  two: "مصمم لمحركات الديزل في أسطول واسع من السيارات (سيارات ، سيارات الدفع الرباعي الخفيفة ، الشاحنات الصغيرة والشاحنات الخفيفة) من الشركات المصنعة الأوروبية وغيرها. موصى به للاستخدام في محركات دايملر ، سيارات فولكس فاجن ذات المتطلبات الإضافية لزيوت المحركات (وفقًا للمواصفات المذكورة أعلاه). الزيت غير مناسب للاستخدام في الشاحنات الثقيلة والمركبات المماثلة!",
  three:
    "Chempioil Multi SG 15W-40 هو زيت محرك خاص لجميع سيارات الركاب والشاحنات الخفيفة المزودة بمحرك بنزين أو ديزل. مطهر / مضافات مشتتة ممتازة. قوة تشحيم عالية. المعايير: API SG / CD",
  four: "مصمم لتوفير الحماية القصوى لمحركات البنزين والديزل الحديثة لأسطول كبير من السيارات (سيارات الركاب وسيارات الدفع الرباعي الخفيفة والحافلات الصغيرة والشاحنات الخفيفة) من الشركات المصنعة الروسية والأوروبية وغيرها. الزيت غير مناسب للاستخدام في الشاحنات الثقيلة والمركبات المماثلة!",
  five: "مصمم لمحركات الديزل في أسطول واسع من السيارات (سيارات ، سيارات الدفع الرباعي الخفيفة ، الشاحنات الصغيرة والشاحنات الخفيفة) من الشركات المصنعة الأوروبية وغيرها ، ويوصى باستخدامه في محركات دايملر ، سيارات فولكس فاجن مع متطلبات إضافية لزيوت المحركات (وفقًا للمواصفات المذكورة أعلاه) . الزيت غير مناسب للاستخدام في الشاحنات الثقيلة وما يماثلها!",
  six: "مصمم لمحركات البنزين والديزل في أسطول واسع من السيارات (السيارات والمركبات الخفيفة والشاحنات الصغيرة والشاحنات الخفيفة) من الشركات المصنعة الأوروبية وغيرها. يوصى باستخدامه في محركات سيارات Daimler و VW و Opel و GM و Renault التي تفرض متطلبات إضافية لزيوت المحركات (وفقًا للمواصفات أعلاه). الزيت غير مناسب للاستخدام في الشاحنات الثقيلة والمركبات المماثلة!",
  seven: "جميع أنواع الزيوت متوفرة (10w-40 ، 20w-50 ، 5w-30 .....)",
  eight:
    "إنه مصمم لمحركات البنزين رباعية الأشواط للدراجات النارية بجميع أنواعها ، والمركبات التي تعمل على جميع التضاريس (الدراجات الرباعية) ، والدراجات البخارية والدراجات البخارية ذات التبريد بالهواء والسائل ، مع أو بدون علبة تروس مدمجة ، مع قابض حمام الزيت وقابض جاف ، مثل وكذلك بالنسبة للمركبات الأخرى ذات العجلتين مع وبدون المحولات الحفازة التي تلبي متطلبات Euro I و II و III ، عندما تكون مستويات أداء API SN أو أقل و JASO MA / MA2 مطلوبة. إنه مثالي لمحركات الحقن. يوصى باستخدامه لمحركات DUCATI المحددة التي تتطلب زيتًا بدرجة لزوجة 15W-50. يجب مراعاة تعليمات الشركة المصنعة في دليل المحرك ، وخاصة فترات تغيير الزيت!",
  nine: "CHEMPIOIL Multi SG هو زيت محرك محدد لجميع سيارات الركاب والشاحنات الخفيفة المزودة بمحرك بنزين أو ديزل. خصائص مشتتة ومنظفات ممتازة. قوة تشحيم عالية.",
  ten: "يوصى باستخدامه في عمليات النقل اليدوي لسيارات الركاب وعمليات النقل اليدوي للأحمال الثقيلة للطرق السريعة (شاحنات الشحن والحافلات وما إلى ذلك) والطرق الوعرة (الإنشاءات والتعدين والزراعة) والمركبات الخاصة التي تنتجها الشركات المصنعة الأوروبية والأمريكية والآسيوية حيث المستوى المطلوب لخصائص الخدمة هو GL-4 و / أو GL-5. امتثل لتعليمات الشركة المصنعة الواردة في دليل المستخدم.",
  eleven:
    "يوصى باستخدامه في عمليات النقل اليدوي لسيارات الركاب وعمليات النقل اليدوي للأحمال الثقيلة للطرق السريعة (شاحنات الشحن والحافلات وما إلى ذلك) والطرق الوعرة (الإنشاءات والتعدين والزراعة) والمركبات الخاصة التي تنتجها الشركات المصنعة الأوروبية والأمريكية والآسيوية حيث يكون المستوى المطلوب لخصائص الخدمة هو GL-4 و / أو GL-5. التزم بإرشادات الشركة المصنعة المتوفرة في دليل المستخدم.",
  twelve:
    "يوصى باستخدامه في علب التروس الأوتوماتيكية لسيارات الركاب والمركبات التجارية التي تتطلب زيتًا بجودة ATF Type Dexron-IID ، فهو ممزوج بعلامات تجارية ذات جودة مماثلة. اللون: أحمر. التزم بإرشادات الشركة المصنعة الواردة في دليل المستخدم",
  thirteen:
    "مصمم لمحركات البنزين متعددة الصمامات للسيارات وسيارات الدفع الرباعي الخفيفة والشاحنات الصغيرة والشاحنات الخفيفة ، بالإضافة إلى سيارات الدفع الرباعي والشاحنات الخفيفة ، حيث يلزم مستوى أداء API API SN Plus / ILSAC GF-5 من فئة اللزوجة هذه. للسيارات: أكورا ، إنفينيتي ، لكزس ، نيسان ، ميتسوبيشي ، سوزوكي ، تويوتا ، هوندا ، سوبارو ، هونداي ، كيا ، الزيت غير مناسب للاستخدام في الشاحنات الثقيلة والمركبات المماثلة!",
  fourteen:
    "مصمم لمحركات البنزين متعددة الصمامات للسيارات وسيارات الدفع الرباعي الخفيفة والشاحنات الصغيرة والشاحنات الخفيفة ، بالإضافة إلى سيارات الدفع الرباعي والشاحنات الخفيفة ، حيث يلزم مستوى أداء API SP (RC) / ILSAC GF-6A من فئة اللزوجة هذه. موصى به للسيارات: Ford ، Chrysler ، GM Honda ، Acura ، Mazda ، Mitsubishi ، Hyundai ، Kia ، Isuzu ، Suzuki ، Toyota ، Nissan ، Subaru ، الزيت غير مناسب للاستخدام في الشاحنات الثقيلة والمركبات المماثلة!",
  fifteen:
    "يوصى باستخدامه في عمليات النقل اليدوي لسيارات الركاب وعمليات النقل اليدوي للأحمال الثقيلة للطرق السريعة (شاحنات الشحن والحافلات وما إلى ذلك) والطرق الوعرة (الإنشاءات والتعدين والزراعة) والمركبات الخاصة التي تنتجها الشركات المصنعة الأوروبية والأمريكية والآسيوية حيث يكون المستوى المطلوب لخصائص الخدمة هو GL-4 و / أو GL-5. التزم بإرشادات الشركة المصنعة المتوفرة في دليل المستخدم.",
  sixteen:
    "مصمم لمحركات الديزل في أسطول واسع من السيارات (سيارات ، سيارات الدفع الرباعي الخفيفة ، الشاحنات الصغيرة والشاحنات الخفيفة) من الشركات المصنعة الأوروبية وغيرها ، ويوصى باستخدامه في محركات دايملر ، سيارات فولكس فاجن مع متطلبات إضافية لزيوت المحركات (وفقًا للمواصفات المذكورة أعلاه) . الزيت غير مناسب للاستخدام في الشاحنات الثقيلة وما يماثلها!",
};

let data = localStorage.getItem("language");
if (data !== "ar") {
  ItemDescription = {
    one: "It is recommended for automatic gearboxes of passenger cars and commercial vehicles requiring the ATF Type Dexron-III H/G/F or Dexron-II E or FORD MERCON V quality oil. It is designed for the majority of automatic gearboxes for General Motors, Ford Company and other brands manufactured up to 2006.",
    two: "Designed for diesel engines in a wide fleet of cars (cars, light SUVs, vans and light trucks) of European and other manufacturers. Recommended for use in engines of Daimler, VW vehicles with additional requirements for engine oils (according to the above specifications). The oil is not suitable for use in heavy trucks and similar vehicles!",
    three:
      "Chempioil Multi SG 15W-40 is a special engine oil for all passenger cars and light trucks, equipped with petrol or diesel engine. Excellent disinfectant / dispersion additives. High lubrication power. Standards:API SG/CD",
    four: "Designed for the maximum protection of modern petrol and diesel engines of a wide car fleet (passenger cars, light SUVs, minibuses and light trucks) from Russian, European and other manufacturers. The oil is not suitable for use in heavy trucks and similar vehicles!",
    five: "Designed for diesel engines in a wide fleet of cars (cars, light SUVs, vans and light trucks) of European and other manufacturers.Recommended for use in engines of Daimler, VW vehicles with additional requirements for engine oils (according to the above specifications).The oil is not suitable for use in heavy trucks and similar vehicles!",
    six: "Designed for gasoline and diesel engines in a wide fleet of cars (cars, light utility vehicles, vans and light trucks) of European and other manufacturers. Recommended for use in the engines of Daimler, VW, Opel, GM, Renault vehicles imposing additional requirements for engine oils (according to the above specifications).The oil is not suitable for use in heavy trucks and similar vehicles!",
    seven: "All types of oils are available (10w-40 , 20w-50 , 5w-30 ..... )",
    eight:
      "It is designed for petrol-powered four-stroke engines of motorcycles of all types, all-terrain vehicles (quadricycles), scooters and mopeds with air and liquid cooling, with or without an integrated gearbox, with oil bath clutch and “dry” clutch, as well as for other two-wheeled vehicles with and without catalytic converters meeting Euro I, II, III requirements, when API SN or lower and JASO MA/MA2 performance levels are required. It is ideal for injection engines. It is recommended for specific DUCATI engines requiring oil with a viscosity grade of 15W-50.Observe the manufacturer’s instructions in the engine manual, especially the oil change intervals!",
    nine: "CHEMPIOIL Multi SG is a specific engine oil for all passenger cars and light trucks, fitted with a gasoline or diesel engine. Excellent detergent and dispersant properties. High lubrication power.",
    ten: "It is recommended for use in manual transmissions of passenger cars and heavy-load manual transmissions of highway (freight trucks, buses, etc.), off-road (construction, mining, agricultural) and special vehicles produced by European, American and Asian manufacturers in which the required level of service characteristics is GL-4 and/or GL-5. Comply with the manufacturer’s instructions provided in the user’s manual.",
    eleven:
      "It is recommended for use in manual transmissions of passenger cars and heavy-load manual transmissions of highway (freight trucks, buses, etc.), off-road (construction, mining, agricultural) and special vehicles produced by European, American and Asian manufacturers in which the required level of service characteristics is GL-4 and/or GL-5.Comply with the manufacturer’s instructions provided in the user’s manual.",
    twelve:
      "It is recommended for automatic gearboxes of passenger cars and commercial vehicles requiring the oil of ATF Type Dexron-IID quality, it is mixed with brands of similar quality. Colour: red.Comply with the manufacturer’s instructions provided in the user’s manu",
    thirteen:
      "Designed for multi-valve gasoline engines of cars, light SUVs, vans and light trucks, as well as SUV cars and light-duty vans, where the performance level API API SN Plus/ ILSAC GF-5 of this viscosity class is required.Recommended for cars: ACURA, INFINITI, LEXUS, NISSAN, MITSUBISHI, SUZUKI, TOYOTA, HONDA, SUBARU, HUNDAI, KIA.The oil is not suitable for use in heavy trucks and similar vehicles!",
    fourteen:
      "Designed for multi-valve gasoline engines of cars, light SUVs, vans and light trucks, as well as SUV cars and light-duty vans, where the performance level API SP (RC) / ILSAC GF-6A of this viscosity class is required.Recommended for cars: Ford, Chrysler, GM Honda, Acura, Mazda, Mitsubishi, Hyundai, Kia, Isuzu, Suzuki, Toyota, Nissan, Subaru.The oil is not suitable for use in heavy trucks and similar vehicles!",
    fifteen:
      "It is recommended for use in manual transmissions of passenger cars and heavy-load manual transmissions of highway (freight trucks, buses, etc.), off-road (construction, mining, agricultural) and special vehicles produced by European, American and Asian manufacturers in which the required level of service characteristics is GL-4 and/or GL-5.Comply with the manufacturer’s instructions provided in the user’s manual.",
    sixteen:
      "Designed for diesel engines in a wide fleet of cars (cars, light SUVs, vans and light trucks) of European and other manufacturers.Recommended for use in engines of Daimler, VW vehicles with additional requirements for engine oils (according to the above specifications).The oil is not suitable for use in heavy trucks and similar vehicles!",
  };
}

switch (id) {
  case "1":
    itemOneDescription = ItemDescription["one"];
    break;
  case "2":
    itemOneDescription = ItemDescription["two"];
    break;
  case "3":
    itemOneDescription = ItemDescription["three"];
    break;
  case "4":
    itemOneDescription = ItemDescription["four"];
    break;
  case "5":
    itemOneDescription = ItemDescription["five"];
    break;
  case "6":
    itemOneDescription = ItemDescription["six"];
    break;
  case "7":
    itemOneDescription = ItemDescription["seven"];
    break;
  case "8":
    itemOneDescription = ItemDescription["eight"];
    break;
  case "9":
    itemOneDescription = ItemDescription["nine"];
    break;
  case "10":
    itemOneDescription = ItemDescription["ten"];
    break;
  case "11":
    itemOneDescription = ItemDescription["eleven"];
    break;

  case "12":
    itemOneDescription = ItemDescription["twelve"];
    break;

  case "13":
    itemOneDescription = ItemDescription["thirteen"];
    break;
  case "14":
    itemOneDescription = ItemDescription["fourteen"];
    break;
  case "15":
    itemOneDescription = ItemDescription["fifteen"];
    break;
  case "16":
    itemOneDescription = ItemDescription["sixteen"];
    break;

  default:
    text = "No value found";
}

let textMutedElement = document.querySelector(".text-muted");
textMutedElement.textContent = itemOneDescription;
