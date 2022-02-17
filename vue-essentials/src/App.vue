<script>
const emoji = ["🍒", "🍋", "🍆", "🍑"];

export default {
  data() {
    class Slot {
      constructor(emoji, finished, index) {
        this.emoji = String(emoji);
        this.finished = Boolean(finished);
        this.index = parseInt(index);
      }
    }
    let slots = [];
    for (let i = 0; i < 3; i++) {
      slots[i] = new Slot("❓", true, i);
    }
    return {
      title: "Hello slotmachine",
      slots,
    };
  },
  computed: {
    done: function () {
      return this.slots.every((slot) => slot.finished);
    },
    hasWon: function () {
      return (
        this.slots[0].emoji === this.slots[1].emoji &&
        this.slots[0] === this.slots[2]
      );
    },
  },
  watch: {
    done: function (newVal) {
      if (newVal) {
        this.$refs.tick.pause();
      }
    },
    /*
    slots: {
      handler: function (newVal) {
        console.log(newVal);
        console.log(`de emoji van de nieuwe value ${newVal[0].emoji}`);
        console.log(typeof newVal);
        if (newVal.every((slot) => slot.finished)) {
          console.log("gedaan");
          this.$refs.tick.pause();
        }
      },
      deep: true,
    },*/
  },
  methods: {
    rotate(slot) {
      // 1. zet finished op false
      slot.finished = false;
      // 2. draaien
      let i = 0;
      const int = setInterval(() => {
        slot.emoji = emoji[i];
        // verhoog i,
        // wat als i groter wordt dan emoji.length?
        if (i < emoji.length - 1) {
          i++;
        } else {
          i = 0;
        }
      }, 120);
      // 3. elk slot 'draait' voor een willekeurige tijd
      setTimeout(() => {
        clearInterval(int);
        slot.finished = true;
        this.$refs.ding.currentTime = 0;
        this.$refs.ding.play();
      }, 2000 + Math.random() * 3000);
    },
    play() {
      this.slots.forEach(this.rotate);
      this.$refs.tick.play();
    },
  },
};
</script>

<template>
  <audio
    preload="auto"
    volume="0.1"
    ref="tick"
    src="../public/sounds/185611__kubawolanin__metal-tick-1.wav"
    loop
    hidden
  ></audio>
  <audio
    preload="auto"
    ref="ding"
    src="../public/sounds/411088__inspectorj__bell-candle-damper-a-h4n.wav"
    hidden
  ></audio>
  <main class="container">
    <div class="machine">
      <h1>{{ title }}</h1>
      <div class="slots">
        <div
          class="slot"
          :class="{ draai: slot.finished }"
          :key="slot.index"
          v-for="slot in slots"
        >
          <span ref="slotVis">{{ slot.emoji }}</span>
        </div>
      </div>
      <button @click="play" :disabled="!done">PLAY!</button>
      <div lang="fr" v-if="!done">Rien ne va plus</div>
      <div v-if="hasWon && done">gewonnen</div>
    </div>
  </main>
</template>

<style lang="scss">
@import "./assets/base.css";
body {
  background-color: rgb(245, 245, 220);
  color: black;
}
.machine {
  text-align: center;
}

h1 {
  font-weight: 600;
}

.slots {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.slot {
  padding: 0.5rem 1rem;
  background-color: white;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

button + div {
  margin-top: 1rem;
  font-style: italic;
}

button {
  border: none;
  background-color: rgb(138, 205, 228);
  padding: 1rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

button:hover {
  cursor: pointer;
  background-color: lightblue;
}
</style>
