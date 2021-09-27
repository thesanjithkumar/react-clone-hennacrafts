import CardDiv from "../components/ui/homepage/CardDiv.";
import EssentailsCombo from "../components/ui/homepage/EssentailsCombo";
import FacepackPowder from "../components/ui/homepage/FacepackPowder";
import HennaBlog from "../components/ui/homepage/HennaBlog";
import HennaIndigo from "../components/ui/homepage/HennaIndigo";
import TopDiv from "../components/ui/homepage/TopDiv";
import WelcomeDiv from "../components/ui/homepage/WelcomeDiv";

function HomePage() {
  // function hover_henna() {
  //   var ele = document.getElementById("product_henna");
  //   ele.setAttribute(
  //     "src",
  //     "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-with-kit-300x300.jpg"
  //   );
  // }

  // function unhover_henna() {
  //   var ele = document.getElementById("product_henna");
  //   ele.setAttribute(
  //     "src",
  //     "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-600x600.jpg"
  //   );
  // }

  return (
    <main>
      {/* topdiv */}
      <TopDiv />
      {/* topdiv */}
      {/* card div section */}
      <CardDiv />
      {/* card div section */}
      {/* Henna And indigo section */}
      <HennaIndigo />
      {/* Henna And Indigo section */}
      {/* face pack powder section */}
      <FacepackPowder />
      {/* face pack powder section */}
      {/* Essentail oil and combo section */}
      <EssentailsCombo />
      {/* Essentail oil and combo section */}
      {/* welcom div */}
      <WelcomeDiv />
      {/* welcom div */}
      {/* Henna Blog */}
      <HennaBlog />
      {/* Henna Blog */}
    </main>
  );
}

export default HomePage;
