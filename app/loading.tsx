"use client";
import React from "react";
import styled from "styled-components";

const Loader: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="loader" />
        <div className="loader" />
        <div className="loader" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    position: relative;
    width: 100%;
    height: 100vh; /* full screen loader */
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 160px;
    height: 100px;
    border-radius: 5px;
    background: #1e3f57;
    animation: dot1_ 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  }

  .loader:nth-child(2) {
    z-index: 11;
    width: 150px;
    height: 90px;
    border-radius: 3px;
    background: #3c517d;
    animation: dot2_ 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  }

  .loader:nth-child(3) {
    z-index: 12;
    width: 40px;
    height: 20px;
    border-radius: 0 0 5px 5px;
    background: #6bb2cd;
    animation: dot3_ 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  }

  @keyframes dot1_ {
    3%, 97% {
      width: 160px;
      height: 100px;
    }
    30%, 36% {
      width: 80px;
      height: 120px;
    }
    63%, 69% {
      width: 40px;
      height: 80px;
    }
  }

  @keyframes dot2_ {
    3%, 97% {
      height: 90px;
      width: 150px;
    }
    30%, 36% {
      width: 70px;
      height: 96px;
    }
    63%, 69% {
      width: 32px;
      height: 60px;
    }
  }

  @keyframes dot3_ {
    3%, 97% {
      height: 20px;
      width: 40px;
    }
    30%, 36% {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    63%, 69% {
      width: 16px;
      height: 4px;
      border-radius: 10px;
    }
  }
`;

export default Loader;
