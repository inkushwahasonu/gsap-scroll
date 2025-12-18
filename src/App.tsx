import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollVideo3 from "./components/ScrollVideo3";
// import ScrollVideo4 from "./components/ScrollVideo4";
import ScrollVideo from "./components/ScrollVideo";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return; // ✅ Fix

    ScrollTrigger.create({
      trigger: video,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => video.play(),
      onLeave: () => video.pause(),
      onEnterBack: () => video.play(),
      onLeaveBack: () => video.pause(),
    });
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam, praesentium, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed non, eum praesentium est nisi ipsam assumenda vero rerum labore recusandae! Molestiae fugit quia doloribus cupiditate, inventore at aspernatur deserunt pariatur quos deleniti quod nulla iure vel accusantium tempore impedit aliquam? Sapiente veniam ipsa ipsam et, ad voluptatum voluptas assumenda velit dicta magni reprehenderit quis illo dolores saepe nemo iure pariatur, nulla similique totam quas. Neque sint porro ex ut rem soluta accusamus debitis suscipit architecto laboriosam aliquam reprehenderit, voluptatem at, quas aspernatur alias delectus nihil autem excepturi, est recusandae! Delectus fuga reprehenderit repellat ab accusamus aliquam doloribus doloremque deserunt modi impedit fugit repellendus id dolorum sequi dolore, suscipit saepe aspernatur, provident, alias est aperiam veniam libero sed asperiores. Vitae eius voluptas pariatur fuga dicta quam modi est veritatis commodi. Laudantium quia fugit natus asperiores sunt nemo perferendis libero ad voluptates iusto quidem quas iste enim accusamus, explicabo odit necessitatibus quibusdam laborum vel porro suscipit fuga nostrum? Cum libero, iure aut, quae necessitatibus neque laboriosam illo voluptas provident quam ratione et explicabo consectetur est! Qui repudiandae officiis voluptatum quibusdam porro, sequi neque eveniet enim reprehenderit adipisci vitae nobis dolorum eos inventore cum voluptatem laborum quas iusto soluta ratione dolore! Facere corrupti commodi tempora dolore praesentium, facilis laborum voluptatem dolorem, voluptatibus quae non! Veniam nisi voluptates et repudiandae deleniti ducimus inventore, explicabo officiis. Exercitationem laudantium nisi quia dolore explicabo nulla iure aliquam quos facilis beatae blanditiis consequatur illum ut culpa impedit, corrupti iusto facere laboriosam dolores animi voluptate corporis nam cupiditate asperiores. Dolor soluta in amet nemo suscipit dolores sunt, ipsa obcaecati incidunt facere totam est, dignissimos fuga velit, cum tenetur quas iste. Magnam eveniet optio sunt ipsa cupiditate natus. Sapiente soluta sint accusantium! Eos eaque nisi eligendi sunt fuga cumque ducimus incidunt quod beatae sint commodi consequuntur, aspernatur, necessitatibus fugiat tempora cupiditate, ipsa ratione laboriosam inventore? Ipsam delectus iusto nostrum magni iste debitis. Fugit doloribus a vero inventore rerum illo libero, dolore debitis, repellat culpa quis ut recusandae. Quos quasi perspiciatis maiores tempore, beatae quidem soluta reiciendis magni cumque est nihil tempora veniam ut eveniet, voluptatem sit at reprehenderit quia sed rerum officia expedita animi porro minus! Corrupti ratione a laboriosam minima optio? Nisi quidem voluptatibus possimus sunt rem a repudiandae reiciendis aut deserunt quos. Perferendis adipisci quisquam quibusdam mollitia id nisi provident laborum ducimus accusamus. Magnam blanditiis accusantium obcaecati est explicabo consequuntur expedita ad praesentium voluptatum. Molestiae vero excepturi deserunt magni praesentium laboriosam libero aspernatur, minima quis aut dolorum magnam repudiandae eum quaerat nulla fugit consectetur corporis provident ut esse ea placeat sit? Nihil delectus perspiciatis at explicabo magni autem provident! Labore sequi dolores non unde quam nulla nam, sit error! Vitae quod, magnam praesentium nihil est at tempore quasi qui, quas ipsum incidunt sequi suscipit aut accusantium amet hic blanditiis, deserunt vero. Porro iusto incidunt delectus ullam, praesentium dicta veniam consequatur beatae minus magnam possimus. Maxime, fugit tempore quo eveniet enim maiores nemo deserunt dolorem, delectus magnam asperiores voluptates id at reprehenderit laudantium provident, libero nam assumenda? Vel reiciendis nobis velit tempora voluptate aut iusto, soluta itaque? Quis totam adipisci dolor tenetur illum! Nesciunt, veritatis recusandae sunt quos a consectetur, vitae voluptatem unde itaque beatae, deserunt minus. Libero inventore quas porro pariatur nostrum, sunt recusandae natus ipsam! Eligendi ex dignissimos voluptate eum et qui, modi repudiandae quas mollitia quos voluptatum sapiente, nihil praesentium deleniti vero odio eveniet itaque. Adipisci quam voluptates aspernatur nostrum dicta, blanditiis dignissimos vitae amet ipsa excepturi accusantium consequatur perspiciatis laudantium necessitatibus ea fugit quod eligendi repellat totam ratione consequuntur nihil voluptatem mollitia esse. Odit necessitatibus assumenda accusantium repellat earum debitis, dolore mollitia incidunt illum neque quo quia, voluptate est. Quae molestias ad, eos, accusantium incidunt repellendus optio culpa dolorem sint debitis exercitationem tempore. Aspernatur non aliquid praesentium saepe quis sed voluptates corrupti ratione! Tenetur ratione quas velit? Veritatis, magnam libero sequi accusamus nobis neque debitis! Voluptas et quaerat aspernatur nulla optio, deleniti sequi reprehenderit maxime officia dolore voluptatum obcaecati hic doloremque rem laudantium quasi nesciunt, nemo nobis. Obcaecati ullam itaque, id sequi eius voluptas laborum tempore iure harum exercitationem minima temporibus consequuntur ex soluta dolores corrupti voluptatum doloremque magni velit. Incidunt, voluptates doloribus eius error sint suscipit perferendis id enim at expedita obcaecati dolorem porro molestiae veritatis delectus sunt veniam, recusandae maiores cumque. Provident, nihil ipsa nam ex accusantium qui doloremque modi nesciunt nulla quam quibusdam beatae cumque tenetur eos corrupti in neque, repellat atque. Consequuntur nulla non quasi voluptates repellat magni quis quaerat rerum aliquam, tempora, odit hic quisquam quidem doloribus laborum id. Amet adipisci repellendus nostrum deserunt fugiat ut commodi nemo aspernatur eos dolores cumque facilis, eaque, dolor distinctio accusantium nam. Culpa reprehenderit porro amet dolore quaerat unde totam magnam. Iure hic ut, quibusdam id eveniet amet illum impedit nulla accusamus, expedita fuga possimus. Aperiam dolores voluptas fugit et! Nobis optio placeat autem eveniet pariatur, quibusdam consequuntur vitae vel, quisquam nesciunt consequatur, praesentium expedita? Sunt iure repudiandae dolorem hic quasi, eveniet corrupti commodi quaerat, ex maxime quibusdam? Placeat blanditiis aperiam exercitationem laborum ad! Repudiandae illum nobis minus facilis tempore veniam sequi dolorum cupiditate odio hic voluptates molestias maxime repellendus quas praesentium esse aliquid magni repellat at, veritatis ipsum soluta quod optio nostrum? Tenetur in nisi a possimus aperiam quisquam vitae magnam voluptatum velit, doloribus illum, exercitationem minima quaerat maxime eum dolore veniam architecto harum. Nisi consectetur harum sapiente, culpa quos asperiores sit deleniti, obcaecati esse neque assumenda corporis cupiditate, facilis ipsam voluptatem libero expedita! Molestias, harum eum est repudiandae nihil ullam laborum deleniti illum dignissimos ducimus inventore. Eveniet, qui vitae aperiam dolor iure iusto molestiae accusamus? Ipsam autem numquam sunt aut, explicabo, delectus labore provident commodi magnam ab atque placeat sint! Impedit, libero sunt. Odit quis quae suscipit architecto numquam aut itaque quo ab repudiandae perspiciatis, pariatur velit iste fuga, fugit beatae error, excepturi amet dolorum nihil officia provident voluptatibus ex saepe aliquam? Est perferendis necessitatibus ducimus animi! Sit cumque velit ipsa nihil ratione, explicabo fugit commodi natus tenetur sapiente, nemo hic voluptas cum cupiditate iure eius consequuntur illo recusandae! Similique, dolorem nostrum! quam molestiae error qui, velit eum cumque libero voluptatibus doloremque nobis excepturi rem suscipit tenetur delectus voluptatum ratione harum non expedita nostrum? Totam unde cupiditate in, illo cumque voluptates eaque error, sapiente assumenda, iure inventore voluptatum ipsum deleniti nam doloribus rem distinctio culpa corporis iste perferendis explicabo. Perspiciatis quasi dolorum nulla est quibusdam, quo repellendus libero voluptas beatae. Ducimus dolorum deleniti dolores earum nisi? Possimus similique molestias, ullam eaque modi est sapiente illo quos inventore, maxime ab quas quia optio recusandae! Totam pariatur sapiente, officiis, recusandae, nisi qui nemo rem ullam molestiae quam in quasi? Similique eveniet ipsam odit et cum sit laboriosam nesciunt libero dolore fugit facilis nulla veniam molestias, incidunt perspiciatis consequatur sequi voluptatem sapiente. Minus soluta asperiores sunt eveniet. Distinctio odit voluptates sed ipsum, libero placeat, adipisci saepe dolor necessitatibus veritatis, laborum assumenda maxime fugit voluptatem. Illum laborum, deserunt voluptatibus possimus molestias dolorem vitae harum iste et error quam nihil soluta deleniti modi aperiam rem consequatur sunt ipsum. Possimus recusandae ex deserunt obcaecati iste. Molestias voluptatibus asperiores assumenda ipsa itaque, minima delectus illo? Consectetur, quis facere dignissimos perferendis placeat aspernatur molestias culpa aliquid doloribus sint veniam unde ex! Non at repellat, deleniti culpa rerum reprehenderit ducimus ab, facere odit cupiditate assumenda deserunt sit totam accusantium. Porro mollitia id, cumque obcaecati quidem provident accusantium. Eius tempore inventore placeat architecto consectetur commodi doloremque tempora voluptatibus iusto ullam? Expedita ipsum cum earum consequatur aspernatur inventore delectus quas id magnam quis dicta quos iure cupiditate laboriosam temporibus, debitis ad at ullam quam placeat eaque. Ad neque iure dolore animi minus, deserunt, voluptatibus necessitatibus facilis tempora quas corrupti at, illum vitae praesentium rem nihil id aspernatur reprehenderit laudantium rerum quo earum voluptate totam. Vel impedit odio neque deserunt molestias optio hic quia illo, ab voluptatibus, laborum fugit autem ipsa iure dignissimos totam. Nulla earum accusantium enim porro placeat dignissimos ab esse, hic officia provident et laboriosam molestiae perferendis incidunt. Adipisci corporis magni eos libero cupiditate nisi reprehenderit. Perspiciatis molestias fugit dignissimos commodi explicabo nisi, corporis possimus porro quisquam sint laboriosam, similique ullam molestiae eveniet officia excepturi rem odit adipisci consequuntur, cum facere ipsam ea! Eveniet modi eum cum? Obcaecati explicabo hic, ratione asperiores ipsum corporis esse quis unde minima deleniti fuga sequi doloremque necessitatibus nobis ullam qui amet quisquam consectetur, labore optio sit! Ea eligendi reprehenderit eum aspernatur sunt praesentium quod, deleniti, labore, consequuntur harum ad ratione! Quod ex enim reprehenderit vitae suscipit, unde quidem iste adipisci! Iste aliquam obcaecati impedit ex, repudiandae facere quidem harum adipisci aliquid et fuga amet quod nobis facilis optio labore laborum explicabo ea voluptatum itaque corporis illum ipsa. Officia natus suscipit sint quisquam a ut officiis ex reprehenderit? Reiciendis iusto voluptatem ipsa corrupti, suscipit voluptates soluta nobis excepturi fugit? Suscipit illum ea asperiores quisquam, natus nisi deleniti! Reprehenderit error molestias iste, doloremque voluptates illo facere earum! Delectus modi nulla eligendi, pariatur nobis animi quo voluptatibus officia culpa dignissimos fugiat facere eveniet! Similique iure ex totam dicta fuga cum veritatis ullam ea error nisi. Eaque at, placeat dignissimos molestiae porro quibusdam quis facere? Vero voluptatum nemo ea, tempore odio nesciunt illo reiciendis corporis veniam voluptatibus incidunt dolores obcaecati mollitia laudantium voluptatem quo cupiditate quidem perspiciatis tenetur consectetur voluptas! Alias placeat quis in distinctio ullam, suscipit exercitationem doloribus porro enim autem molestias deleniti quaerat ea asperiores totam hic atque veritatis provident voluptatum delectus? Laborum ab eligendi libero beatae suscipit veritatis numquam eos minus officia modi sint architecto saepe impedit nihil, quam illum officiis aliquam voluptas hic eum ea enim quas! Reiciendis et totam officiis qui maxime dolor, sapiente dolorum repellat nam praesentium rem fugit impedit consequuntur neque asperiores natus nihil hic quo, nesciunt aliquid vel debitis. Est illo quisquam voluptates incidunt vel dolore totam magni. Itaque, laborum? Dolor commodi laborum sapiente dignissimos accusantium, reiciendis, hic animi nihil est nam deserunt. Cupiditate aliquam ipsum vero. Architecto itaque modi ad sunt in dolores! Sed vel reiciendis molestias praesentium id sit provident quidem? Eveniet necessitatibus eligendi omnis optio iusto. Nihil molestiae quasi iusto vero facere tempora corporis cumque, et non eveniet voluptatibus, repudiandae, quis est nisi modi excepturi cum obcaecati. Vero debitis reprehenderit, dolore fugit voluptas qui minima nulla veritatis cupiditate aliquid officia facilis soluta necessitatibus laudantium ullam! Voluptatem culpa ratione iure autem aperiam aspernatur ipsum impedit quia. Dolorem vero iusto quam molestias amet soluta, sapiente impedit officia, deleniti exercitationem laborum modi inventore in consectetur necessitatibus ab praesentium reiciendis rem ad maxime aliquid quidem ipsa dolores. Expedita blanditiis distinctio autem dolore odit odio consequuntur itaque ducimus sequi. Voluptas atque asperiores molestiae veritatis, quis recusandae. Perferendis harum repudiandae cupiditate. Nesciunt, mollitia! Nisi maiores iusto earum necessitatibus laboriosam sapiente consequuntur quisquam, qui molestias dolor ex, facilis incidunt autem explicabo quam, saepe perferendis recusandae. Accusantium porro eveniet ullam velit dicta totam magnam, officiis quidem iste molestias saepe nihil quisquam, hic sit, nobis quia quod optio ab perspiciatis iure! Illum ab eos quidem voluptatibus consequuntur debitis tempora minima ducimus vel commodi quibusdam ut temporibus quod quaerat facere laboriosam voluptatem, obcaecati impedit, dolorem eveniet pariatur dignissimos. Alias nemo mollitia blanditiis, rerum facere ad soluta deserunt? Molestiae dolor maxime illum laborum laboriosam repellendus, similique minima ipsam eum, repellat tenetur non nobis aspernatur voluptates expedita eos, quaerat cum dicta deleniti adipisci eveniet impedit distinctio est dolores? Modi, reprehenderit maiores adipisci ea amet iure sit expedita dolor mollitia dolores, cum reiciendis temporibus provident cupiditate nihil, non libero est a molestiae aut facilis magnam inventore eligendi quibusdam! Nam, cum porro et vel ducimus rem vero harum excepturi enim laboriosam modi fuga, asperiores dicta dolor voluptatem blanditiis tempore veritatis iste. Pariatur, velit esse numquam ducimus illo, repellat itaque odio sint dolorem facere et quis sed ea rerum repellendus alias enim voluptates delectus tenetur odit dolorum, cupiditate consequatur. Nam quia natus, aut temporibus consequatur perspiciatis commodi placeat doloremque illum! Qui totam earum laborum voluptas itaque, debitis esse temporibus maiores delectus fuga. Delectus in voluptatibus officiis facilis culpa molestiae ducimus inventore? Quibusdam fugit dolores at, voluptatibus eum adipisci quas cum architecto qui!</div> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          ref={videoRef}
          width={1000}
          muted
          playsInline
          preload="none"
          // src="https://www.apple.com/105/media/us/macbook-air/2025/0833fe28-c438-4dc4-8edc-e39ef30df5f9/anim/hero/medium_2x.webm"
          // src="/public/videos/medium_2x.webm"
          src="https://storage.googleapis.com/portfolio-cdn.teckat.com/medium_2x.webm"
        />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        totam, praesentium, quam molestiae error qui, velit eum cumque libero
        voluptatibus doloremque nobis excepturi rem suscipit tenetur delectus
        voluptatum ratione harum non expedita nostrum? Totam unde cupiditate in,
        illo cumque voluptates eaque error, sapiente assumenda, iure inventore
        voluptatum ipsum deleniti nam doloribus rem distinctio culpa corporis
        iste perferendis explicabo. Perspiciatis quasi dolorum nulla est
        quibusdam, quo repellendus libero voluptas beatae. Ducimus dolorum
        deleniti dolores earum nisi? Possimus similique molestias, ullam eaque
        modi est sapiente illo quos inventore, maxime ab quas quia optio
        recusandae! Totam pariatur sapiente, officiis, recusandae, nisi qui nemo
        rem ullam molestiae quam in quasi? Similique eveniet ipsam odit et cum
        sit laboriosam nesciunt libero dolore fugit facilis nulla veniam
        molestias, incidunt perspiciatis consequatur sequi voluptatem sapiente.
        Minus soluta asperiores sunt eveniet. Distinctio odit voluptates sed
        ipsum, libero placeat, adipisci saepe dolor necessitatibus veritatis,
        laborum assumenda maxime fugit voluptatem. Illum laborum, deserunt
        voluptatibus possimus molestias dolorem vitae harum iste et error quam
        nihil soluta deleniti modi aperiam rem consequatur sunt ipsum. Possimus
        recusandae ex deserunt obcaecati iste. Molestias voluptatibus asperiores
        assumenda ipsa itaque, minima delectus illo? Consectetur, quis facere
        dignissimos perferendis placeat aspernatur molestias culpa aliquid
        doloribus sint veniam unde ex! Non at repellat, deleniti culpa rerum
        reprehenderit ducimus ab, facere odit cupiditate assumenda deserunt sit
        totam accusantium. Porro mollitia id, cumque obcaecati quidem provident
        accusantium. Eius tempore inventore placeat architecto consectetur
        commodi doloremque tempora voluptatibus iusto ullam? Expedita ipsum cum
        earum consequatur aspernatur inventore delectus quas id magnam quis
        dicta quos iure cupiditate laboriosam temporibus, debitis ad at ullam
        quam placeat eaque. Ad neque iure dolore animi minus, deserunt,
        voluptatibus necessitatibus facilis tempora quas corrupti at, illum
        vitae praesentium rem nihil id aspernatur reprehenderit laudantium rerum
        quo earum voluptate totam. Vel impedit odio neque deserunt molestias
        optio hic quia illo, ab voluptatibus, laborum fugit autem ipsa iure
        dignissimos totam. Nulla earum accusantium enim porro placeat
        dignissimos ab esse, hic officia provident et laboriosam molestiae
        perferendis incidunt. Adipisci corporis magni eos libero cupiditate nisi
        reprehenderit. Perspiciatis molestias fugit dignissimos commodi
        explicabo nisi, corporis possimus porro quisquam sint laboriosam,
        similique ullam molestiae eveniet officia excepturi rem odit adipisci
        consequuntur, cum facere ipsam ea! Eveniet modi eum cum? Obcaecati
        explicabo hic, ratione asperiores ipsum corporis esse quis unde minima
        deleniti fuga sequi doloremque necessitatibus nobis ullam qui amet
        quisquam consectetur, labore optio sit! Ea eligendi reprehenderit eum
        aspernatur sunt praesentium quod, deleniti, labore, consequuntur harum
        ad ratione! Quod ex enim reprehenderit vitae suscipit, unde quidem iste
        adipisci! Iste aliquam obcaecati impedit ex, repudiandae facere quidem
        harum adipisci aliquid et fuga amet quod nobis facilis optio labore
        laborum explicabo ea voluptatum itaque corporis illum ipsa. Officia
        natus suscipit sint quisquam a ut officiis ex reprehenderit? Reiciendis
        iusto voluptatem ipsa corrupti, suscipit voluptates soluta nobis
        excepturi fugit? Suscipit illum ea asperiores quisquam, natus nisi
        deleniti! Reprehenderit error molestias iste, doloremque voluptates illo
        facere earum! Delectus modi nulla eligendi, pariatur nobis animi quo
        voluptatibus officia culpa dignissimos fugiat facere eveniet! Similique
        iure ex totam dicta fuga cum veritatis ullam ea error nisi. Eaque at,
        placeat dignissimos molestiae porro quibusdam quis facere? Vero
        voluptatum nemo ea, tempore odio nesciunt illo reiciendis corporis
        veniam voluptatibus incidunt dolores obcaecati mollitia laudantium
        voluptatem quo cupiditate quidem perspiciatis tenetur consectetur
        voluptas! Alias placeat quis in distinctio ullam, suscipit
        exercitationem doloribus porro enim autem molestias deleniti quaerat ea
        asperiores totam hic atque veritatis provident voluptatum delectus?
        Laborum ab eligendi libero beatae suscipit veritatis numquam eos minus
        officia modi sint architecto saepe impedit nihil, quam illum officiis
        aliquam voluptas hic eum ea enim quas! Reiciendis et totam officiis qui
        maxime dolor, sapiente dolorum repellat nam praesentium rem fugit
        impedit consequuntur neque asperiores natus nihil hic quo, nesciunt
        aliquid vel debitis. Est illo quisquam voluptates incidunt vel dolore
        totam magni. Itaque, laborum? Dolor commodi laborum sapiente dignissimos
        accusantium, reiciendis, hic animi nihil est nam deserunt. Cupiditate
        aliquam ipsum vero. Architecto itaque modi ad sunt in dolores! Sed vel
        reiciendis molestias praesentium id sit provident quidem? Eveniet
        necessitatibus eligendi omnis optio iusto. Nihil molestiae quasi iusto
        vero facere tempora corporis cumque, et non eveniet voluptatibus,
        repudiandae, quis est nisi modi excepturi cum obcaecati. Vero debitis
        reprehenderit, dolore fugit voluptas qui minima nulla veritatis
        cupiditate aliquid officia facilis soluta necessitatibus laudantium
        ullam! Voluptatem culpa ratione iure autem aperiam aspernatur ipsum
        impedit quia. Dolorem vero iusto quam molestias amet soluta, sapiente
        impedit officia, deleniti exercitationem laborum modi inventore in
        consectetur necessitatibus ab praesentium reiciendis rem ad maxime
        aliquid quidem ipsa dolores. Expedita blanditiis distinctio autem dolore
        odit odio consequuntur itaque ducimus sequi. Voluptas atque asperiores
        molestiae veritatis, quis recusandae. Perferendis harum repudiandae
        cupiditate. Nesciunt, mollitia! Nisi maiores iusto earum necessitatibus
        laboriosam sapiente consequuntur quisquam, qui molestias dolor ex,
        facilis incidunt autem explicabo quam, saepe perferendis recusandae.
        Accusantium porro eveniet ullam velit dicta totam magnam, officiis
        quidem iste molestias saepe nihil quisquam, hic sit, nobis quia quod
        optio ab perspiciatis iure! Illum ab eos quidem voluptatibus
        consequuntur debitis tempora minima ducimus vel commodi quibusdam ut
        temporibus quod quaerat facere laboriosam voluptatem, obcaecati impedit,
        dolorem eveniet pariatur dignissimos. Alias nemo mollitia blanditiis,
        rerum facere ad soluta deserunt? Molestiae dolor maxime illum laborum
        laboriosam repellendus, similique minima ipsam eum, repellat tenetur non
        nobis aspernatur voluptates expedita eos, quaerat cum dicta deleniti
        adipisci eveniet impedit distinctio est dolores? Modi, reprehenderit
        maiores adipisci ea amet iure sit expedita dolor mollitia dolores, cum
        reiciendis temporibus provident cupiditate nihil, non libero est a
        molestiae aut facilis magnam inventore eligendi quibusdam! Nam, cum
        porro et vel ducimus rem vero harum excepturi enim laboriosam modi fuga,
        asperiores dicta dolor voluptatem blanditiis tempore veritatis iste.
        Pariatur, velit esse numquam ducimus illo, repellat itaque odio sint
        dolorem facere et quis sed ea rerum repellendus alias enim voluptates
        delectus tenetur odit dolorum, cupiditate consequatur. Nam quia natus,
        aut temporibus consequatur perspiciatis commodi placeat doloremque
        illum! Qui totam earum laborum voluptas itaque, debitis esse temporibus
        maiores delectus fuga. Delectus in voluptatibus officiis facilis culpa
        molestiae ducimus inventore? Quibusdam fugit dolores at, voluptatibus
        eum adipisci quas cum architecto qui!
      </div>
      <div>
        <ScrollVideo />
        {/* <ScrollVideo3/> */}
        {/* <div>
          <ScrollVideo4 />
        </div> */}
      </div>
    </div>
  );
}
