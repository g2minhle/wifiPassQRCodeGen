import { ChangeEvent, useState } from "react"
import styles from "../styles/Home.module.css"

export default function Home() {

  const [ssid, setSSID] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");

  const data = `WIFI:T:WPA;S:${ssid};P:${wifiPassword};;`;
  const imageUrl = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${data}`;

  const onSSIDChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setSSID(event.target.value);
  }

  const onWifiPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setWifiPassword(event.target.value);
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
