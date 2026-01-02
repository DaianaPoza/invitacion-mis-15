import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { WEDDING } from "../../config/WeddingConfig.js";
import "./Confirmacion.css";


export default function RSVP() {
  const [form, setForm] = useState({
    nombre: "",
    asistencia: "",        // "si" | "no"
    restric: "Ninguna",
    restricOtra: "",
  });
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const isValid = form.nombre.trim() && (form.asistencia === "si" || form.asistencia === "no");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    try {
      setSending(true);
      setError("");

      const restricFinal =
        form.asistencia === "no"
          ? "N/A"
          : form.restric === "Otra..."
            ? (form.restricOtra.trim() || "No especifica")
            : form.restric;

      const fd = new FormData();
      fd.append("nombre", form.nombre.trim());
      fd.append("asistencia", form.asistencia);
      fd.append("restricciones", restricFinal);
      fd.append("_subject", "Nueva respuesta de RSVP");
      fd.append("_origin", window.location.href);

      const resp = await fetch(WEDDING.rsvp.formAction, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
        mode: "cors",
      });
      if (!resp.ok) throw new Error("No se pudo enviar la confirmación.");

      setOk(true);
    } catch (err) {
      setError(err.message || "Ocurrió un error al enviar el formulario.");
    } finally {
      setSending(false);
    }
  };

  if (ok) {
    return (
      <section className="rsvp">
        <Alert variant="success" className="rsvp-card">
          <p className="success-title">¡Gracias por tu respuesta! 💌</p>
          <p className="success-text">Registramos tu confirmación.</p>
        </Alert>
      </section>
    );
  }

  return (
    <section className="rsvp">
      <div className="rsvp-card">
        <h1 className="heading">Confirmar asistencia</h1>



        <Form onSubmit={handleSubmit} noValidate className="siono">
          {/* Sí / No */}
          <div className="radios" role="group" aria-label="¿Podés asistir?">
            <Form.Check
              type="radio"
              id="rsvp-si"
              name="asistencia"
              label="¡Sí, confirmo!"
              value="si"
              checked={form.asistencia === "si"}
              onChange={(e) => setForm(f => ({ ...f, asistencia: e.target.value }))}
            />
            <Form.Check
              type="radio"
              id="rsvp-no"
              name="asistencia"
              label="No podré asistir"
              value="no"
              checked={form.asistencia === "no"}
              onChange={(e) => setForm(f => ({ ...f, asistencia: e.target.value }))}
            />
          </div>
        

          {/* Nombre */}
          <Form.Group className="mb-3" controlId="rsvpNombre">
            <Form.Control
              type="text"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={(e) => setForm(f => ({ ...f, nombre: e.target.value }))}
              required
              aria-required="true"
            />
          </Form.Group>

          {/* Restricción (solo si asiste) */}
          {form.asistencia === "si" && (
            <Form.Group className="mb-3">
              <Form.Label className="field-label">¿Tenés alguna restricción alimentaria?</Form.Label>
              <Form.Select
                value={form.restric}
                onChange={(e) => setForm(f => ({ ...f, restric: e.target.value }))}
                aria-label="Seleccioná una opción"
              >
                <option>Ninguna</option>
                <option>Vegetariano/a</option>
                <option>Vegano/a</option>
                <option>Celíaco/a (sin TACC)</option>
                <option>Sin lactosa</option>
                <option>Sin cerdo</option>
                <option>Otra...</option>
              </Form.Select>

              {form.restric === "Otra..." && (
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="¿Cuál?"
                  className="mt-2"
                  value={form.restricOtra}
                  onChange={(e) => setForm(f => ({ ...f, restricOtra: e.target.value }))}
                />
              )}
            </Form.Group>
          )}

          {error && <Alert variant="danger" className="py-2">{error}</Alert>}

          <div className="d-grid">
            <Button type="submit" className="btn-confirm" disabled={!isValid || sending}>
              {sending ? "Enviando..." : "CONFIRMAR"}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}

