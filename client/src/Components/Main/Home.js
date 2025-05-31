import React from "react";
// import bg from "../../assets/bg.webp";
import bg from "../../assets/bg.png";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp";
import g1 from "../../assets/donation/g1.jpg";
import g2 from "../../assets/donation/g2.jpg";
import g3 from "../../assets/donation/g3.jpg";
import g4 from "../../assets/donation/g4.jpg";
const Home = () => {
  const temp = [
    { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
    { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
    { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
    { blood: "AB+", donate: "AB+", recieve: "Everyone" },
    { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
    { blood: "O-", donate: "Everyone", recieve: "O-" },
    { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
    { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" },
  ];
  const temp2 = [
    { title: "Registration", img: g1 },
    { title: "Seeing", img: g2 },
    { title: "Donation", img: g3 },
    { title: "Save Life", img: g4 },
  ];
  return (
    <div className="dark:text-white-900">
      <img
        src={bg}
        alt=""
        style={{ width: "100%", height: "700px", display: "block" }}
      />
      <div className="grid grid-cols-2 place-items-center mt-6 px-52">
        <div>
          <img draggable={false} src={bg2} width="100%" alt="" />
        </div>
        <div>
          <p className="text-center font-bold text-4xl text-gray-dark dark:text-white-900">
            Be the reason <br />
            for <br />
            someone's heartbeat
          </p>
        </div>
      </div>
      <h1 className="font-bold text-center text-blood my-4 text-lg underline">
        Learn About Donation
      </h1>
      <div className="flex px-20">
        <div>
          <img src={donationFact} width="90%" alt="" />
          <p className="text-center">
            <code>
              After donating blood, the body works to replenish the blood loss.
              This stimulates the production of new blood cells and in turn,
              helps in maintaining good health.
            </code>
          </p>
        </div>
        <div>
          <table className="w-max" cellPadding={5}>
            <tr>
              <td
                colSpan={3}
                className="border bg-blood text-white-900 text-center font-bold"
              >
                Compatible Blood Type Donors
              </td>
            </tr>
            <tr>
              <th className="border w-max text-lg">Blood Type</th>
              <th className="border w-max text-lg">Donate Blood To</th>
              <th className="border w-max text-lg">Receive Blood From</th>
            </tr>
            {temp.map((e) => {
              return (
                <tr>
                  <td className="border w-max text-lg">{e.blood}</td>
                  <td className="border w-max text-lg">{e.donate}</td>
                  <td className="border w-max text-lg">{e.recieve}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <p className="text-xl underline font-bold text-blood text-center mt-5 mb-5">
        Blood Donation Process
      </p>
      <div className="grid grid-cols-2 place-items-center gap-x-6 gap-y-10">
        {temp2.map((e, i) => {
          const descriptions = [
            "Register yourself as a blood donor by providing essential personal and health information. This step ensures your eligibility and helps the donation center prepare for your visit. Remember, your decision to register is the first step toward saving lives and making a positive impact in your community.",
            "Before donating, you will undergo a quick health screening by medical professionals. This includes checking your temperature, blood pressure, hemoglobin levels, and a brief health questionnaire. This step guarantees that both you and the recipients remain safe throughout the donation process.",
            "The actual donation usually takes about 10-15 minutes. A sterile needle is used to collect approximately one pint of blood while you comfortably sit or lie down. During this time, you can relax, listen to music, or chat with volunteers. After donating, you’ll be advised to rest and hydrate to help your body recover quickly.",
            "Once collected, your blood is carefully tested, processed, and stored in blood banks to be available for patients in need. Your generous donation can save lives in emergencies, surgeries, and treatments. By donating blood, you become a vital part of the healthcare system and a true lifesaver.",
          ];
          return (
            <div
              key={i}
              className="border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2 hover:shadow-xl transition duration-300"
            >
              <div>
                <img src={e.img} draggable={false} width="100%" alt="" />
              </div>
              <div className="m-4">
                <h1 className="font-bold text-lg text-midnight dark:text-white-900">
                  {i + 1} - {e.title}
                </h1>
                <p className="text-justify">{descriptions[i]}</p>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <div
        style={{ backgroundColor: "#f87171" }}
        className="w-full text-white-900 h-max text-lg text-center font-bold py-6"
      >
        <code>BloodLink @ {new Date().getFullYear()} || Made by Athena</code>
      </div>
    </div>
  );
};

export default Home;
