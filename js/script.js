const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      items: 10,
      mails: [],
    };
  },
  created() {
    for (let i = 0; i < this.items; i++) {
      axios.get(endpoint).then((res) => {
        this.mails.push(res.data.response);
      });
    }
  },
});

app.mount("#root");
