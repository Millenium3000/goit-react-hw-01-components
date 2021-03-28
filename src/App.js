// App.js - главный компонент (обертка) создаваемого приложения;
// Компоненты обязательно называются с большой буквы. В одном файл - прописываем работу только одного компонента;
// компонент - это функция, куда мы закидываем настроийки, а на выходе получаем Virtual DOM, который потом рендерится в настоящий DOM.

import React from "react"; //обзятельно import React  в каждый файл, чтобы использовать JSX и он мог  скомпилироваться и транспайлиться

// Components
import Section from "./components/Section/section";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friendsData from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <div className="App">
      <Section>
        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />

        <Section>
          <Statistics title="Upload stats" stats={statisticalData} />
        </Section>

        <Section>
          <FriendList friendsData={friendsData} />
        </Section>

        <Section>
          <TransactionHistory items={transactions} />
        </Section>
      </Section>
    </div>
  );
}

export default App;
