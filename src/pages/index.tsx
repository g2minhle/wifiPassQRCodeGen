import { ChangeEvent, useEffect, useState } from "react";

import QRCode from "react-qr-code";
import React from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {

  const router = useRouter();

  const [ssid, setSSID] = useState("");
  const [shareableLink, setShareableLink] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");

  const data = `WIFI:T:WPA;S:${ssid};P:${wifiPassword};;`;

  useEffect(() => {
    setSSID(router.query["ssid"] as string);
    setWifiPassword(router.query["wifiPassword"] as string);
   }, [router.query["ssid"], router.query["wifiPassword"]]);

  useEffect(() => {
    setShareableLink(`https://${window.location.hostname}:${window.location.port}/?ssid=${ssid}&wifiPassword=${wifiPassword}`);
  }, [ssid, wifiPassword]);

  const onSSIDChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setSSID(event.target.value);
  }

  const onWifiPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setWifiPassword(event.target.value);
  }

  return (
    <div>
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
      <p>
        <a href={shareableLink}>{shareableLink}</a>
      </p>
      <QRCode
        size={500}
        style={{ height: "auto", maxWidth: "500px", width: "500px" }}
        value={data}
        viewBox={`0 0 256 256`}
      />
    </div>
  )
}
