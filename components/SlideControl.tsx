import React, { useEffect, SetStateAction, useState, Dispatch } from "react";
import { SegmentedControl } from "@mantine/core";
import jsonp from "jsonp";
import axios from "axios";
import { useContextStore } from "../context/AuthContext";

const SlideControl = ({ LocDataFunc }: { LocDataFunc: any }) => {
  const { site, setSite } = useContextStore();

  useEffect(() => {
    if (site === "bms") {
      bms_sense();
    } else if (site === "tk") {
      tk_sense();
    }
  }, [site]);

  useEffect(() => {
    setSite("bms");
  }, []);

  const bms_sense = async () => {
    axios
      .get(`https://in.bookmyshow.com/api/explore/v1/discover/regions`)
      .then((response) => {
        const location_data = response.data.BookMyShow.TopCities.map(
          (item: any, id: number) => ({
            key: `t-${id}`,
            label: item?.RegionName,
            value: `{"name": "${item?.RegionName}", "location_code": "${item?.RegionCode}"}`,
          })
        );
        response.data.BookMyShow.OtherCities.forEach(
          (element: any, id: number) => {
            location_data.push({
              key: `o-${id}`,
              label: element?.RegionName,
              value: `{"name": "${element?.RegionName}", "location_code": "${element?.RegionCode}"}`,
            });
          }
        );
        LocDataFunc(location_data);
      });
  };

  const tk_sense = async () => {
    // the tktnew api response is in jsonp format -> jsonp module used to extract infromation
    jsonp(
      `https://api.ticketnew.com/api?_api_access_key=b1ed36c7bdbe43c1a76d01a6b8ed9c46&_api_name=ticketnew.app.location.allCities&_api_timestamp=1658745104178&_api_version=1.0.0&request={"appDevice":1658745104178,"appVersion":"4.4.8","appPlatform":"H5","appEnv":"PROD","appChannel":"TICKETNEW"}&_api_signature=4ExixovOYhKwnTkuSm5v7p2uh/I=&_api_jsonp_callback=jsonp0`,
      { name: "jsonp0" },
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          const location_data = data.body.data.all.map(
            (item: any, id: number) => ({
              key: `t-${id}`,
              label: item.name,
              value: `{"name": "${item.name}", "location_code": "${item.id}"}`,
            })
          );
          LocDataFunc(location_data);
        }
      }
    );
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-3">
        <div>
          <p>Select Booking Website:</p>
        </div>
        <div>
          <SegmentedControl
            className="m-2"
            color="blue"
            value={site}
            onChange={setSite}
            data={[
              { label: "BookMyShow", value: "bms" },
              { label: "Ticket New", value: "tk" },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default SlideControl;
