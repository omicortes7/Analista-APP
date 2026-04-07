// ============================================================
// PATCH: Tab Chat en modal del jugador (analista)
// Añadir en index.html justo antes de </body>:
// <script src="js/patch_chat_tab.js"></script>
// ============================================================
(function() {
  function applyPatch() {

    // ── PATCH renderDT: añadir case 'chat' ──
    var _origRenderDT = window.renderDT;
    window.renderDT = function(tab) {
      if (tab === 'chat') {
        if (window._chatInterval) clearInterval(window._chatInterval);
        if (typeof renderChatAnalista === 'function') renderChatAnalista();
        window._chatInterval = setInterval(function() {
          if (window.state && window.state.currentJugador) {
            cargarMensajesAnalista(window.state.currentJugador);
          }
        }, 10000);
        return;
      }
      if (_origRenderDT) _origRenderDT(tab);
    };

    // ── PATCH switchDT: incluir 'chat' en la lista ──
    var _origSwitchDT = window.switchDT;
    window.switchDT = function(tab) {
      var TABS = ['obj','clips','informe','historial','tareas','plan','seguimiento','chat'];
      document.querySelectorAll('#mdj .dtab').forEach(function(el, i) {
        el.classList.toggle('active', TABS[i] === tab);
      });
      renderDT(tab);
    };

    // ── PATCH openJug: inyectar botón Chat en el modal ──
    var _origOpenJug = window.openJug;
    window.openJug = function(id) {
      if (_origOpenJug) _origOpenJug(id);
      setTimeout(function() {
        if (document.getElementById('dtab-chat')) return; // ya existe
        // Buscar el contenedor de tabs (.dtabs o el primer overflow-x:auto con botones)
        var allDtabs = document.querySelectorAll('#mdj .dtab');
        if (!allDtabs.length) return;
        var lastTab = allDtabs[allDtabs.length - 1];
        var container = lastTab.parentNode;
        var btn = document.createElement('button');
        btn.id = 'dtab-chat';
        btn.className = 'dtab';
        btn.textContent = '💬 Chat';
        btn.onclick = function() { switchDT('chat'); };
        container.appendChild(btn);
      }, 150);
    };

    // ── Parar polling al cerrar el modal ──
    var _origCloseModal = window.closeModal;
    window.closeModal = function(id) {
      if (id === 'mdj' && window._chatInterval) {
        clearInterval(window._chatInterval);
        window._chatInterval = null;
      }
      if (_origCloseModal) _origCloseModal(id);
    };

    console.log('✅ Patch chat analista cargado');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(applyPatch, 600); });
  } else {
    setTimeout(applyPatch, 600);
  }
})();
