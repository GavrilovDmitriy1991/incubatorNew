import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddNewCustomerScreen } from "./AddNewCustomerScreen";

export function SearchScreen() {
  return (
    <div>
      <h1 className="filialName">DS</h1>
      <div className="buttonsBlock">
        <input
          className="searchString"
          type="text"
          placeholder="Введите номер авто"
        />
        <button className="searchButton">ПОИСК</button>
        <div>
          <Link to="/AddNewCustomerScreen">
            <button className="createClientButton">Создать клиента</button>
          </Link>
        </div>
        <div>
          <button className="addZatrati">Указать затраты</button>
        </div>
      </div>
    </div>
  );
}
