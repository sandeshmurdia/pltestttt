"use client";

import { Badge, HStack } from "@chakra-ui/react";
import "./globals.css";
import zipy from 'zipyai'; 
import { useState, useEffect } from "react";


export default function Home() {
  const positionLeft = 20;
  const positionRight = 20
  const PRICING_CELL_WIDTH = 500; // Example value
  const borderRightRadius = "8px";
  const borderLeftRadius = "8px";
  zipy.init('85c36373');

  // State for background color
  const [bgColor, setBgColor] = useState("var(--dsoBand-default)"); // Initial color

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBgColor("var(--dsoBand-enhanced)"); // Change color after 1 sec
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []); // Run once after component mounts

  const x  = (2 + 2 === 3);
  
  return (
    <div
      // style={{
      //   height: "1000px",
      //   width: "100%",
      //   background: "transparent", // Apply computed background or default to transparent
      //   padding: "200px",
      // }}
    >
      <div>
        <Badge
          pos="absolute"
          bottom="2px"
          left={`${positionLeft}px`}
          right={`${positionRight}px`}
          width={`${PRICING_CELL_WIDTH - positionLeft + positionRight}px`}
          borderRightRadius={borderRightRadius}
          borderLeftRadius={borderLeftRadius}
          bg={'dsoBand.default'} // Dynamically set background color
          color={'green'}
        >
          Click me
        </Badge>
      </div>
    </div>
  );
}
