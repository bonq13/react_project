# 🧪 Study Buddy App

## 🇵🇱 Opis (Polski)

Projekt stworzony w ramach kursu React, oparty na create-react-app. Aplikacja przedstawia użytkowników przypisanych do grup, pozwala wyświetlać ich szczegóły, filtrować oraz zarządzać wyświetlanymi danymi. Interfejs zbudowany z wykorzystaniem komponentów oraz styled-components. Na ten moment jeszcze nie jest w pełni skończona i brakuje jej kilku funkcjonalności.

### 📁 Struktura projektu

- `src/components/` – komponenty budujące interfejs aplikacji (np. `Navigation`, `UsersList`, `Modal`)
- `src/context/` – React Context do zarządzania stanem (np. widocznością modala)
- `src/views/` – widoki odpowiadające za konkretne podstrony (np. Dashboard)
- `src/assets/` – zasoby takie jak globalne style (`GlobalStyle`)
- `src/hooks/` – niestandardowe hooki do pobierania i przetwarzania danych (`useStudents`)
- `src/mocks/` – konfiguracja mocków przy użyciu MSW (`handlers.js`, `browser.js`)
- `src/utils/` – funkcje pomocnicze

### 🧰 Technologie

- **React** – biblioteka do budowania interfejsów użytkownika
- **React Context API** – do zarządzania globalnym stanem (np. modal)
- **styled-components** – do stylowania komponentów
- **MSW (Mock Service Worker)** – do mockowania API w środowisku deweloperskim
- **axios** – do wykonywania zapytań HTTP
- **CRA (Create React App)** – szkielet projektu
