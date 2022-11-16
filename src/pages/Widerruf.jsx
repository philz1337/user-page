import Footer from "../components/Footer"
import Nav from "../components/Nav"

export default function Widerruf() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <h1 className="text-2xl lg:text-3xl font-semibold text-center mt-5 lg:mb-5">
        Widerruf
      </h1>

      <div className="w-10/12 lg:w-9/12 gap-5 lg:gap-10 mt-10 mb-20">
        <p>
          Wenn Sie Verbraucher sind (also eine natürliche Person, die die
          Bestellung zu einem Zweck abgibt, der weder Ihrer gewerblichen oder
          selbständigen beruflichen Tätigkeit zugerechnet werden kann), steht
          Ihnen nach Maßgabe der gesetzlichen Bestimmungen ein Widerrufsrecht
          zu.
        </p>
        <br />
        <p>
          Machen Sie als Verbraucher von Ihrem Widerrufsrecht Gebrauch, so haben
          Sie die regelmäßigen Kosten der Rücksendung zu tragen.
        </p>
        <br />
        <p>
          Im Übrigen gelten für das Widerrufsrecht die Regelungen, die im
          Einzelnen wiedergegeben sind in der folgenden
        </p>
        <br />
        <p>
          <strong>
            <em>Widerrufsbelehrung¹</em>
          </strong>
        </p>
        <br />
        <p>
          <em>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen.
          </em>
          &nbsp;
          <em>
            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag an dem Sie oder
            ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die
            Waren in Besitz genommen haben bzw. hat.
          </em>
          &nbsp;
          <em>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer
            eindeutigen Erklärung per E-Mail an support@okasi.de über Ihren
            Entschluss, diesen Vertrag zu widerrufen, informieren. Machen Sie
            von dieser Möglichkeit Gebrauch, so werden wir Ihnen unverzüglich
            per E-Mail eine Bestätigung über den Eingang eines solchen Widerrufs
            übermitteln.
          </em>
          &nbsp;
          <em>
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
            Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
            Widerrufsfrist absenden.
          </em>
          &nbsp;<em>Folgen des Widerrufs:</em>&nbsp;
          <em>
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
            die wir von Ihnen erhalten haben, einschließlich der Lieferkosten
            (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass
            Sie eine andere Art der Lieferung als die von uns angebotene,
            günstigste Standardlieferung gewählt haben), unverzüglich und
            spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem
            die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
            eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe
            Zahlungsmittel, das Sie bei der ursprünglichen Transaktion
            eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas
            anderes vereinbart; in keinem Fall werden Ihnen wegen dieser
            Rückzahlung Entgelte berechnet. Wir können die Rückzahlung
            verweigern, bis wir die Waren wieder zurückerhalten haben oder bis
            Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt
            haben, je nachdem, welches der frühere Zeitpunkt ist.
          </em>
          &nbsp;
          <em>
            Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
            vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
            Vertrages unterrichten, an uns oder an (hier sind gegebenenfalls der
            Name und die Anschrift der von Ihnen zur Entgegennahme der Ware
            ermächtigten Person einzufügen) zurückzusenden oder zu übergeben.
            Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von
            vierzehn Tagen absenden.
          </em>
          &nbsp;
          <em>
            Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
          </em>
          &nbsp;
          <em>
            Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen,
            wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit,
            Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang
            mit ihnen zurückzuführen ist.
          </em>
        </p>
        <br />
        <p>
          <em>– Ende der Widerrufsbelehrung –</em>
        </p>
        <br />
        <p>
          <em>
            (¹ Diese Widerrufsbelehrung gilt nicht für die getrennte Lieferung
            von Waren.)
          </em>
        </p>
      </div>
      <Footer />
    </div>
  )
}
