import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import landscape from '../../images/A_propos-Background.png';
import '../../styles/Propos/a-propos.css';

function Propos() {
    return (
        <div className="propos">
            <Banner background={landscape} masking={true} />
            <div className="collapseElements">
                <Collapse
                    collapseTitle="Fiabilité"
                    collapseContent={
                        <p>
                            Les annonces postées sur Kasa garantissent une
                            fiabilité totale. Les photos sont conformes aux
                            logements, et toutes les informations sont
                            régulièrement vérifiées par nos équipes.
                        </p>
                    }
                />
                <Collapse
                    collapseTitle="Respect"
                    collapseContent={
                        <p>
                            La bienveillance fait partie des valeurs fondatrices
                            de Kasa. Tout comportement discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion
                            de notre plateforme.
                        </p>
                    }
                />
                <Collapse
                    collapseTitle="Service"
                    collapseContent={
                        <p>
                            Nos équipes se tiennent à votre disposition pour
                            vous fournir une expérience parfaite. N'hésitez pas
                            à nous contacter si vous avez la moindre question
                        </p>
                    }
                />
                <Collapse
                    collapseTitle="Sécurité"
                    collapseContent={
                        <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour
                            nos hôtes que pour les voyageurs, chaque logement
                            correspond aux critères de sécurité établis par nos
                            services. En laissant une note aussi bien à l'hôte
                            qu'au locataire, cela permet à nos équipes de
                            vérifier que les standards sont bien respectés. Nous
                            organisons également des ateliers sur la sécurité
                            domestique pour nos hôtes.
                        </p>
                    }
                />
            </div>
        </div>
    );
}

export default Propos;
