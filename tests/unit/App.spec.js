import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

test('App.vue muestra el mensaje retornado de la función data | Asegúrate de que App.vue defina en su función data la propiedad "message" y que esta sea mostrada dentro de un <p> en el template', async () => {
  const message = "test message";

  const wrapper = shallowMount(App);

  await wrapper.setData({ message });

  const p = wrapper.get("p");

  expect(p.text()).toContain(message);
});
