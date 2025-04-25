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

## Description (English)

A project created as part of a React course, based on a create-react-app. The application presents users assigned to groups, allows displaying their details, filtering, and managing the displayed data. The interface is built using components and styled-components. Currently, it is not yet fully finished and is missing several functionalities.

## 📁 Project Structure

- **src/components/** - Components building the application interface (e.g., Navigation, UsersList, Modal).
- **src/context/** - React Context for state management (e.g., Modal visibility).
- **src/views/** - Views responsible for specific sub-pages (e.g., Dashboard).
- **src/assets/** - Resources such as global styles (GlobalStyle).
- **src/hooks/** - Custom hooks for fetching and processing data (e.g., useStudents).
- **src/mocks/** - Configuration of mocks using MSW (handlers.js, browser.js).
- **src/utils/** - Auxiliary functions.

## 🧰 Technologies

- **React** - Library for building user interfaces.
- **React Context API** - For managing global state (e.g., modal visibility).
- **styled-components** - For styling components.
- **MSW (Mock Service Worker)** - For mocking APIs in the development environment.
- **axios** - For making HTTP requests.
- **CRA (Create React App)** - Project framework.
