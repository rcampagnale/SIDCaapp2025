import { ScrollView, StatusBar, Text, View, Image } from "react-native";

export default function AboutUs() {
  const statusBarHeight = StatusBar.currentHeight;
  return (
    <View style={{ height: "100%", paddingTop: statusBarHeight }}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#091d24",
          width: "100%",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: "#ffffff",
            fontWeight: 500,
            height: 45,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          Quienes somos
        </Text>
        <ScrollView
          style={{ width: "100%", height: 200 }}
          horizontal={true}
          contentContainerStyle={{ columnGap: 20, alignItems: "center" }}
        >
          <Image
            source={require("../../assets/somos/somos1.jpg")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos2.jpg")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos3.jpg")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos4.jpg")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos5.jpg")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos6.jpg")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos7.jpg")}
            style={{ width: 200, height: 100 }}
          />
        </ScrollView>
        <View
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#fea200",
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: "justify",
              paddingHorizontal: 10,
            }}
          >
            SIDCA, el sindicato de docentes de Catamarca, inscripción gremial
            2902, adherido a la Confederación Argentina de Educadores, CEA,
            Personería gremial 1716. Trabaja en la firme defensa de los derechos
            docente, reafirmando el reclamo permanente por mejores condiciones
            en el desempeño profesional, promoviendo la capacitación y el
            perfeccionamiento, exigiendo el respeto a normativas justas para los
            trabajadores y trabajadoras de la educación. Creemos que la
            educación es motor indiscutible de desarrollo de los pueblos y por
            eso defendemos las mejores condiciones laborales para quienes la
            imparten, en consonancia con las instituciones gremiales
            consolidadas a nivel país y la internacional de la educación, que
            cuidan y protegen a educadores del país y el mundo.
          </Text>
        </View>
        <ScrollView
          style={{ width: "100%", height: 200 }}
          horizontal={true}
          contentContainerStyle={{ columnGap: 20, alignItems: "center" }}
        >
          <Image
            source={require("../../assets/somos/somos8.jpg")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos9.jpg")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos10.jpg")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos11.png")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos12.png")}
            style={{ width: 200, height: 100 }}
          />
          <Image
            source={require("../../assets/somos/somos13.png")}
            style={{ width: 200, height: 100 }}
          />
        </ScrollView>
      </View>
    </View>
  );
}
