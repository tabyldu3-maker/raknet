# Makefile для RakNet Packet Decryptor
CXX = g++
CXXFLAGS = -std=c++11 -Wall -Wextra -O2
TARGET = RakNetDecryptor
SOURCE = RakNetPacketDecryptor.cpp

# Правило по умолчанию
all: $(TARGET)

# Компиляция
$(TARGET): $(SOURCE)
	$(CXX) $(CXXFLAGS) -o $(TARGET) $(SOURCE)

# Запуск теста
test: $(TARGET)
	./$(TARGET)

# Очистка
clean:
	rm -f $(TARGET)

# Установка (опционально)
install: $(TARGET)
	cp $(TARGET) /usr/local/bin/

.PHONY: all test clean install
