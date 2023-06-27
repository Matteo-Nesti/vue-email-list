const link = "https://flynn.boolean.careers/exercises/api/random/mail";

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      items: 10,
      mails: [],
    };
  },
  created() {
    axios.get(link).then((res) => {
      for (let i = 0; i < this.items; i++) {
        this.mails.push(res.data.response);
      }
    });
  },
}).mount("#root");
