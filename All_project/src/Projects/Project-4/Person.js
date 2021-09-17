import img1 from "../../ASSET/img1.jpg";
import img2 from "../../ASSET/img2.jpg";
import img3 from "../../ASSET/img3.jpg";
import img4 from "../../ASSET/img4.jpg";
import img5 from "../../ASSET/img5.jpg";
import "./Styles.css";
import React from "react";

const Person = [
  {
    id: 0,
    Name: "wajid khan",
    Job: "Front End Developer",
    Text: `LaboreOccaecat id consectetur enim proident officia excepteur ipsum. Deserunt duis dolore exercitation cillum tempor. Do nostrud quis sit ut dolor laborum ullamco ex fugiat ad ullamco exercitation duis. Qui Lorem cupidatat sint enim cillum aliqua ipsum laboris eu aliqua exercitation. Nostrud ipsum occaecat dolore adipisicing."`,
    Image: img1,
  },
  {
    id: 1,
    Name: "wajid khan",
    Job: "Front End Developer",
    Text: `LaboreOccaecat id consectetur enim proident officia excepteur ipsum. Deserunt duis dolore exercitation cillum tempor. Do nostrud quis sit ut dolor laborum ullamco ex fugiat ad ullamco exercitation duis. Qui Lorem cupidatat sint enim cillum aliqua ipsum laboris eu aliqua exercitation. Nostrud ipsum occaecat dolore adipisicing."`,

    Image: img2,
  },
  {
    id: 2,
    Name: "Ali khan",
    Job: "Mobile Developer",
    Text: `LaboreOccaecat id consectetur enim proident officia excepteur ipsum. Deserunt duis dolore exercitation cillum tempor. Do nostrud quis sit ut dolor laborum ullamco ex fugiat ad ullamco exercitation duis. Qui Lorem cupidatat sint enim cillum aliqua ipsum laboris eu aliqua exercitation. Nostrud ipsum occaecat dolore adipisicing."`,

    Image: img3,
  },
  {
    id: 3,
    Name: "Abdul Wajid",
    Job: "back End Developer",
    Text: `LaboreOccaecat id consectetur enim proident officia excepteur ipsum. Deserunt duis dolore exercitation cillum tempor. Do nostrud quis sit ut dolor laborum ullamco ex fugiat ad ullamco exercitation duis. Qui Lorem cupidatat sint enim cillum aliqua ipsum laboris eu aliqua exercitation. Nostrud ipsum occaecat dolore adipisicing."`,
    Image: img4,
  },
  // {
  //   id: 5,
  //   Name: "Qias khan",
  //   Job: "MERN Developer",
  //   Text: `LaboreOccaecat id consectetur enim proident officia excepteur ipsum. Deserunt duis dolore exercitation cillum tempor. Do nostrud quis sit ut dolor laborum ullamco ex fugiat ad ullamco exercitation duis. Qui Lorem cupidatat sint enim cillum aliqua ipsum laboris eu aliqua exercitation. Nostrud ipsum occaecat dolore adipisicing."`,

  //   Image: img5,
  // }),
];
//   return (
//     <div className="container">
//       {Reviews.map((items) => {
//         const { id, Name, Job, Text, Image } = items;
//         return (
//           <div className="card">
//             <img src={Image} className="img" />
//             <p>{Name}</p>
//             <p>{Job}</p>
//             <p>{Text}</p>
//           </div>
//         );
//       })}
//     </div>
//   );

export default Person;
