import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import styles from "../../styles/courses/courses-styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseconn } from "@/constants/FirebaseConn";

interface HandleOptionsCourse {
  setActionType: (value: null | string) => void;
}

export default function CourseAviablesForMe({
  setActionType,
}: HandleOptionsCourse) {
  const [currentCourses, setCurrentCourses] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [checkData, setCheckData] = useState<number>(0);
  const analytics = getFirestore(firebaseconn);
  const data = collection(analytics, "cursos");

  const openLinks = (urlMedia: string) => {
    Linking.openURL(urlMedia);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = (await getDocs(data)).docs.filter(
          (item) => item.data().estado !== "terminado"
        );
        setCurrentCourses(res);
      } catch (error) {
        alert(`Error:${error}`);
      } finally {
        setLoading(false); // Cambiar el estado de carga al final
      }
    };
    getData();
  }, []);

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#091d24" }}>
      <View style={styles.btnBackToOptions}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => setActionType(null)}
        >
          <AntDesign name="back" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Volver</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          color: "#ffffff",
          width: "90%",
          marginHorizontal: "auto",
          height: "auto",
        }}
      >
        {checkData === 1 ? "No haz finalizado ningun curso" : null}
      </Text>
      <ScrollView
        style={{
          width: "95%",
          height: "80%",
          margin: "auto",
          paddingTop: 5,
        }}
        contentContainerStyle={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          rowGap: 15,
          paddingBottom: 40,
        }}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          currentCourses.map((e: any, i: number) => (
            <View style={styles.linksBox} key={i}>
              {/* Título */}
              <Text
                style={{
                  fontWeight: "bold",
                  width: "90%",
                  textAlign: "center",
                  paddingBottom: 5,
                }}
              >
                {e.data().titulo}
              </Text>

              {/* Imagen */}
              <Image
                src={e.data().imagen}
                style={{ width: "80%", height: 200 }}
                resizeMode="contain"
              />

              {/* Descripción con ScrollView */}
              <ScrollView
                style={{
                  width: "90%",
                  maxHeight: 150, // Limitar altura para evitar desbordes
                  marginVertical: 5,
                }}
                contentContainerStyle={{ alignItems: "center" }}
              >
                <Text style={{ textAlign: "justify" }}>
                  {e.data().descripcion}
                </Text>
              </ScrollView>

              {/* Botón */}
              <TouchableOpacity
                style={styles.btnGetLink}
                onPress={() => openLinks(e.data().link)}
                activeOpacity={1}
              >
                <Text style={{ color: "#ffffff", fontSize: 20 }}>
                  Inscribirse
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
