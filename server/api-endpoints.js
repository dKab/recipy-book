/* eslint-disable */
import regeneratorRuntime from "regenerator-runtime";
/* eslint-enable */
import { getRecipe, getRecipes } from "./getRecipes";
import Router from "koa-router";

export const router = new Router({
  prefix: "/api/"
});

router.get("recipes", async ctx => {
  try {
    const recipes = await getRecipes();
    ctx.body = { ok: true, payload: recipes };
  } catch (err) {
    ctx.status = 500;
    ctx.body = "Internal server error";
  }
});

router.get("recipes/:id", async ctx => {
  try {
    const recipe = await getRecipe(ctx.params.id);
    ctx.body = { ok: true, payload: recipe };
  } catch (err) {
    ctx.status = 500;
    ctx.body = "Internal server error";
  }
});
