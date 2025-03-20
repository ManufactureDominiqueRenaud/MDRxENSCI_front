import Link from "next/link";
import React from "react";

function Page() {
  return (
    <section className="py-[150px] lg:py-[192px] px-[20px] md:px-[70px] lg:px-[120px] bg-[#CDDBDE] text-[#253031] text-left md:text-center">
      <h1 className="font-bold text-3xl lg:text-5xl marcellus-regular">
        Mentions légales
      </h1>
      <div className="block h-px w-1/2 bg-[#253031] my-16 mx-auto"></div>
      <div className="w-full md:w-3/4 mx-auto text-left">
        <div>
          <h2 className="font-bold text-xl mb-4">Editeurs du site</h2>
          <p className="my-1">SARL MANUFACTURE DOMINIQUE RENAUD</p>
          <p className="my-1">
            Route de Saint-Cergues 297, CH-1260 Nyon, Suisse
          </p>
          <p className="my-1">
            Mail :{" "}
            <Link href={"mailto:info@dominiquerenaud.ch"} className="underline">
              info@dominiquerenaud.ch
            </Link>
          </p>
          <p className="my-1">
            Forme juridique : Société Anonyme a Responsabilités Limitées
          </p>
          <p className="my-1">Registre du commerce : Canton de Vaud</p>
          <p className="my-1">
            Numéro au registre du commerce : CHE-405.552.527
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Conditions Générales</h2>
          <p className="my-1">
            Ces Conditions Générales régissent votre utilisation du site web
            situé à l&apos;adresse{" "}
            <Link href={"https://www.renaudtixier.com"} className="underline">
              https://www.renaudtixier.com
            </Link>{" "}
            et des services associés fournis par Manufacture Dominique Renaud
            SARL, tel que{" "}
            <Link href={"https://www.domniquerenaud.com"} className="underline">
              https://www.domniquerenaud.com
            </Link>{" "}
            et tous autres sous domaines affiliés à ces domaines.
          </p>
          <p className="my-1">
            En accédant à{" "}
            <Link href={"https://www.renaudtixier.com"} className="underline">
              https://www.renaudtixier.com
            </Link>
            ,{" "}
            <Link href={"https://www.domniquerenaud.com"} className="underline">
              https://www.domniquerenaud.com
            </Link>{" "}
            et tous autres sous domaines affiliés à ces domaines vous acceptez
            de vous conformer à ces Conditions Générales ainsi qu&apos;à toutes
            les lois et réglementations applicables. Si vous n&apos;acceptez pas
            ces Conditions Générales, vous êtes interdit d&apos;utiliser ou
            d&apos;accéder à ce site web ou à tout autre service fourni par
            Manufacture Dominique Renaud SARL.
          </p>
          <p className="my-1">
            Nous, Manufacture Dominique Renaud SARL, nous réservons le droit de
            réviser et de modifier ces Conditions Générales à notre entière
            discrétion. Lorsqu&apos;une modification sera apportée, nous
            mettrons à jour cette page. Toute modification de ces Conditions
            Générales prendra effet immédiatement à compter de la date de
            publication.
          </p>
          <p className="my-1">
            Ces Conditions Générales ont été mises à jour pour la dernière fois
            le 01 novembre 2024.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">
            Limitations d&apos;Utilisation
          </h2>
          <p className="my-1">
            En utilisant ce site web, vous garantissez en votre nom, au nom de
            vos utilisateurs et des autres parties que vous représentez que vous
            ne ferez pas ce qui suit :
          </p>
          <ul className="p-6">
            <li className="list-disc">
              Modifier, copier, préparer des travaux dérivés, décompiler ou
              désassembler tout matériel ou logiciel contenu sur ce site web ;
            </li>
            <li className="list-disc">
              Retirer toute mention de droit d&apos;auteur ou autre mention de
              propriété des matériaux et logiciels sur ce site web ;
            </li>
            <li className="list-disc">
              Transférer les matériaux à une autre personne ou les « refléter »
              sur tout autre serveur ;
            </li>
            <li className="list-disc">
              Utiliser sciemment ou par négligence ce site web ou tout service
              associé de manière à abuser ou perturber nos réseaux ou tout autre
              service fourni par Manufacture Dominique Renaud SARL ;
            </li>
            <li className="list-disc">
              Utiliser ce site web ou ses services associés pour transmettre ou
              publier tout matériel harcelant, indécent, obscène, frauduleux ou
              illégal ;
            </li>
            <li className="list-disc">
              Utiliser ce site web ou ses services associés en violation de
              toute loi ou réglementation applicable ;
            </li>
            <li className="list-disc">
              Utiliser ce site web en conjonction avec l&apos;envoi de publicité
              non autorisée ou de spam ;
            </li>
            <li className="list-disc">
              Collecter, récolter ou rassembler des données utilisateur sans le
              consentement de l&apos;utilisateur ;
            </li>
            <p className="py-2 font-bold">ou</p>
            <li className="list-disc">
              Utiliser ce site web ou ses services associés de manière à porter
              atteinte à la vie privée, aux droits de propriété intellectuelle
              ou à d&apos;autres droits de tiers.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Propriété Intellectuelle</h2>
          <p className="my-1">
            La propriété intellectuelle des matériaux contenus sur ce site web
            est détenue ou sous licence par Manufacture Dominique Renaud SARL et
            est protégée par les lois applicables en matière de droits
            d&apos;auteur et de marques. Nous accordons à nos utilisateurs la
            permission de télécharger une copie des matériaux pour une
            utilisation personnelle et transitoire non commerciale.
          </p>
          <p className="my-1">
            Ceci constitue l&apos;octroi d&apos;une licence, et non le transfert
            d&apos;un titre de propriété. Cette licence sera automatiquement
            résiliée si vous violez l&apos;une de ces restrictions ou des
            Conditions Générales, et peut être résiliée par Manufacture
            Dominique Renaud SARL à tout moment.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Responsabilité</h2>
          <p className="my-1">
            Notre site web et les matériaux qu&apos;il contient sont fournis
            &quot;en l&apos;état&quot;. Dans la mesure permise par la loi,
            Manufacture Dominique Renaud SARL ne fait aucune garantie, expresse
            ou implicite, et rejette par la présente toutes les autres
            garanties, y compris, sans limitation, les garanties implicites ou
            conditions de qualité marchande, d&apos;adéquation à un usage
            particulier ou de non-violation de droits de propriété
            intellectuelle ou autres droits.
          </p>
          <p className="my-1">
            En aucun cas Manufacture Dominique Renaud SARL ou ses fournisseurs
            ne pourront être tenus responsables de toute perte consécutive subie
            ou encourue par vous ou un tiers résultant de l&apos;utilisation ou
            de l&apos;impossibilité d&apos;utiliser ce site web ou les matériaux
            sur ce site web, même si Manufacture Dominique Renaud SARL ou un
            représentant autorisé a été informé, verbalement ou par écrit, de la
            possibilité de tels dommages.
          </p>
          <p className="my-1">
            Dans le cadre de cet accord, une « perte consécutive » inclut toute
            perte consécutive, perte indirecte, perte réelle ou anticipée de
            profit, perte d&apos;avantage, perte de revenu, perte
            d&apos;affaires, perte de clientèle, perte d&apos;opportunité, perte
            d&apos;économies, perte de réputation, perte d&apos;usage et/ou
            perte ou corruption de données, que ce soit en vertu d&apos;une loi,
            d&apos;un contrat, d&apos;une équité, d&apos;un délit (y compris la
            négligence), d&apos;une indemnité ou autre.
          </p>
          <p className="my-1">
            Certaines juridictions ne permettent pas les limitations sur les
            garanties implicites ou les limitations de responsabilité pour les
            dommages consécutifs ou accessoires, ces limitations peuvent donc ne
            pas s&apos;appliquer à vous.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Exactitude des Matériaux</h2>
          <p className="my-1">
            Les matériaux apparaissant sur notre site web ne sont pas exhaustifs
            et sont fournis à titre d&apos;information générale uniquement.
            Manufacture Dominique Renaud SARL ne garantit pas l&apos;exactitude,
            les résultats probables ou la fiabilité de l&apos;utilisation des
            matériaux sur ce site web, ou autrement relatifs à ces matériaux ou
            à toute ressource liée à ce site web.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Liens</h2>
          <p className="my-1">
            Manufacture Dominique Renaud SARL n&apos;a pas examiné tous les
            sites liés à son site web et n&apos;est pas responsable du contenu
            de ces sites liés. L&apos;inclusion de tout lien n&apos;implique pas
            l&apos;approbation, l&apos;approbation ou le contrôle de Manufacture
            Dominique Renaud SARL sur le site en question. L&apos;utilisation de
            tout site lié est à vos propres risques, et nous vous conseillons
            fortement de mener vos propres enquêtes concernant la pertinence de
            ces sites.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Droit de Résiliation</h2>
          <p className="my-1">
            Nous pouvons suspendre ou résilier votre droit d&apos;utiliser notre
            site web et mettre fin à ces Conditions Générales immédiatement par
            notification écrite en cas de violation de ces Conditions Générales.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Séparabilité</h2>
          <p className="my-1">
            Toute disposition de ces Conditions Générales qui est entièrement ou
            partiellement nulle ou inapplicable est dissociée dans la mesure où
            elle est nulle ou inapplicable. La validité du reste des Conditions
            Générales n&apos;est pas affectée.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Droit Applicable</h2>
          <p className="my-1">
            Ces Conditions Générales sont régies par et interprétées
            conformément aux lois de la Suisse. Vous vous soumettez
            irrévocablement à la juridiction exclusive des tribunaux de cet État
            ou de ce lieu.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Page;
