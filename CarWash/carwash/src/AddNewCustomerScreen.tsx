export function AddNewCustomerScreen() {
  return (
    <div>
      <h1 className="filialName">DS</h1>
      <div className="newCustomerInputs">
        <h2 className="newCustomerZagolovok">Добавление нового клиента</h2>
        <div>
          <input type="text" placeholder="Регион" />
          <input type="text" placeholder="Номер*" />
          <input type="text" placeholder="Серия" />
        </div>
        <div>
          <input
            className="newCustomerSecondInputs"
            type="text"
            placeholder="Марка авто*"
          />
        </div>
        <div>
          <input
            className="newCustomerSecondInputs"
            type="text"
            placeholder="Модель авто"
          />
        </div>
        <div>
          <input
            className="newCustomerSecondInputs"
            type="text"
            placeholder="ФИО владельца"
          />
        </div>
        <button>Выберите класс авто</button>
        <button>Добавить телефон</button>
        <button>Добавить клиента</button>
      </div>
    </div>
  );
}
