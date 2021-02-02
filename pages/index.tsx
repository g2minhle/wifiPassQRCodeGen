import { useRouter } from "next/dist/client/router";
import { ChangeEvent, useEffect, useState } from "react"
import styles from "../styles/Home.module.css"

export default function Home() {

  const router = useRouter();

  const [ssid, setSSID] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");

  const data = `WIFI:T:WPA;S:${ssid};P:${wifiPassword};;`;
  const imageUrl = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${data}`;

  useEffect(() => {
    setSSID(router.query["ssid"] as string);
    setWifiPassword(router.query["wifiPassword"] as string);
  }, [router.query["ssid"], router.query["wifiPassword"]]);

  const onSSIDChanged = (event: ChangeEvent<HTMLInputElement>) => {
    // setSSID(event.target.value);
  }

  const onWifiPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    // setWifiPassword(event.target.value);
  }

  return (
    <div className={styles.container}>
      Wifi name
      <input
        type="text"
        value={ssid}
        onChange={onSSIDChanged}
      />
      Wifi password
      <input
        type="text"
        value={wifiPassword}
        onChange={onWifiPasswordChanged}
      />
      <img src={imageUrl} />
    </div>
  )
}
