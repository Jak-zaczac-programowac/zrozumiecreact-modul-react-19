import { CommentsList } from "./components/CommentsList/CommentsList";
import { LegacyForm } from "./components/LegacyForm/LegacyForm";
import { NewForm } from "./components/NewForm/NewForm";

function App() {
    return (
        <>
            <h1>Ciekawy artykuł o React 19</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt ullam maxime, error ad earum praesentium fugiat ea
                pariatur natus delectus incidunt ut alias porro, aut saepe cum
                obcaecati, necessitatibus voluptatem? Numquam velit, minima
                atque placeat aliquid, natus labore architecto eos rem
                reiciendis similique neque tempore earum quo dolores sed
                distinctio ab magnam? Assumenda excepturi sed voluptates
                molestias nisi veniam quasi. Numquam harum asperiores sequi.
                Alias placeat nemo neque asperiores ullam tempore, pariatur
                animi! Accusamus iure recusandae quisquam dolorem iste dicta
                adipisci facilis autem vero reprehenderit! Fugiat aspernatur
                voluptatum deserunt qui? Voluptate doloribus laboriosam maxime!
                Nesciunt, itaque? Tempora numquam deleniti impedit corrupti
                voluptas totam quod neque vero autem odit nisi deserunt nostrum,
                magnam facere dolore labore delectus obcaecati ut distinctio
                est.
            </p>

            <h2>Komentarze</h2>
            <hr />
            <CommentsList />
            <hr />
            <h3>Skomentuj:</h3>
            {/* <LegacyForm /> */}
            <NewForm />
        </>
    );
}

export default App;
