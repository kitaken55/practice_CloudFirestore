<template>
  <div id="app">
    <h1>Hello world</h1>
    <div>
      <label for="username">userName :</label>
      <input type="text" id="username" v-model="userName" />

      <label for="age">age :</label>
      <input type="number" id="age" v-model="age" />
    </div>
    <button @click="handleClickFetchButton">クリック</button>
    <button @click="handleClickAddButton">追加</button>
    <button @click="handleClickUpdateButton">更新</button>

    <!-- <ul v-if="users.length">
      <div v-for="user in users" :key="user.userId">
        <li :key="user.userId">{{ user.name }} : {{ user.age }} : {{ user.location }}</li>
      </div>
    </ul>-->
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  data() {
    return {
      db: null,
      users: [],
      userName: null,
      age: null
    };
  },
  methods: {
    //受け取りメソッド
    async handleClickFetchButton() {
      //document 取得
      const db = firebase.firestore();
      //   const doc = await db.collection('users').doc('eRswblMTCuYLL3xRlHUo').get();
      //   console.log(doc.data());

      //collection 取得
      await db
        .collection("users")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            // console.log(doc.id, "=>", doc.data());
            this.users.push({
              userId: doc.id,
              ...doc.data()
            });
          });
        });
    },
    //追加メソッド
    async handleClickAddButton() {
      if (!this.userName || !this.age) {
        alert("値が入力されてない箇所があります。");
        return;
      }
      const parseAge = parseInt(this.age, 10);
      if (isNaN(parseAge)) {
        alert("numberは半角の数値でセットしてください");
        return;
      }
      const db = firebase.firestore();
      await db.collection("users").add({
        name: this.userName,
        age: this.age
      });
      this.age = null;
      this.userName = null;
    },
    async handleClickUpdateButton() {
      const db = firebase.firestore();
      await db
        .collection("users")
        .doc("I0N8E6vWR902RDTCg7yq")
        .update({
          name: "田中",
          age: 1
        });
    }
  }
  // created() {
  //   this.db = firebase.firestore();
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
