// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Burger from "../components/Burger";

export default function Home() {
  return (
    <div>
      <main className="cd-main-content">
        <div className="center">
          <h1>Ink Transition Effect</h1>
          <a href="#0" className="cd-btn cd-modal-trigger">
            Start Effect
          </a>
        </div>
      </main>

      <div className="cd-modal">
        <div className="modal-content">
          <h1>My Modal Content</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi
            repellendus, optio eveniet eligendi molestiae? Fugiat, temporibus! A
            rerum pariatur neque laborum earum, illum voluptatibus eum
            voluptatem fugiat, porro animi tempora? Sit harum nulla, nesciunt
            molestias, iusto aliquam aperiam est qui possimus reprehenderit
            ipsam ea aut assumenda inventore iste! Animi quaerat facere
            repudiandae earum quisquam accusamus tempora, delectus nesciunt,
            provident quae aliquam, voluptatum beatae quis similique in maiores
            repellat eligendi voluptas veniam optio illum vero! Eius,
            dignissimos esse eligendi veniam.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            saepe amet sit fugit rerum, corporis minus vitae officia quaerat
            incidunt voluptate, blanditiis ea est quibusdam voluptas animi quasi
            totam magni, commodi praesentium. Possimus quam illo ipsam iste unde
            totam cupiditate deleniti, impedit assumenda hic eligendi natus
            tempora dolores quod mollitia ab non sunt eaque adipisci, suscipit
            quas aliquid officiis beatae. Necessitatibus voluptatibus,
            perferendis tenetur perspiciatis adipisci nesciunt eum ex fuga
            commodi iure numquam enim rem ullam labore nisi magni sint
            voluptatem quos! Eum iure exercitationem voluptates repellendus
            culpa doloremque laborum animi illum, sint fugit soluta possimus a
            fuga veritatis molestias corporis placeat illo pariatur dolor
            reiciendis earum, sapiente omnis. Placeat maiores omnis, porro
            officia, laborum eos. Fugiat mollitia inventore consequuntur odit
            eaque, rerum recusandae, eum sint molestiae consequatur culpa
            deserunt quae aliquid dolor tempora tenetur architecto repellendus
            enim quasi atque, odio voluptas. Tenetur repellendus explicabo ipsum
            inventore quia aut eos expedita necessitatibus asperiores
            blanditiis! Delectus nisi laudantium ipsum! Quasi blanditiis
            corrupti dicta maiores placeat laboriosam delectus ipsum facere
            voluptas, magnam voluptatibus, perferendis alias ullam saepe,
            perspiciatis recusandae voluptates, dolores praesentium?
          </p>
        </div>

        <a href="#0" className="modal-close">
          Close
        </a>
      </div>

      <div className="cd-transition-layer">
        <div className="bg-layer" />
      </div>
    </div>
  );
}
