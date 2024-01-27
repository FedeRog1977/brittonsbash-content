"""
Module dependencies:
    - Makes use of Pillow 8.4.0 -- PIL Fork;
    - PIL (Python Image Library) is a fork allowing mod of image pixels
"""
from PIL import Image


"""
Program: using LSB steganography
    - Encode a message in an image
    - Produce a new image with the encoded message
    - Decode a message from an image
"""


def conv_bin(data):
    """
    Function: data to 8bit binary from ASCII
    """
    # List to store converted binary data
    data_bin = []
    # Loop over each inputted value
    for n in data:
        # Convert char to int rep. of Unicode form
        data_bin.append(format(ord(n), "08b"))
    return data_bin


def conv_pixl(pixl, data):
    """
    Function: convert image pixels relative to binary generated
    """
    # Converted data using <conv_bin()> and store
    data_comp = conv_bin(data)
    # Store length of the converted data for ref.
    data_length = len(data_comp)
    # Create iterative object based on img pixels
    data_img = iter(pixl)

    # Loop over each value in the length of binary data
    for d in range(data_length):
        # Iterate through pixels in image
        pixl = [
            value for value in data_img.__next__()[0:3] +
            data_img.__next__()[0:3] +
            data_img.__next__()[0:3]
        ]
        # Loop for 8bit binary structure
        for b in range(0, 8):
            if (data_comp[d][b] == "0" and pixl[b] % 2 != 0):
                # If binary value of 0, pixel value even
                pixl[b] -= 1
            elif (data_comp[d][b] == "1" and pixl[b] % 2 == 0):
                if(pixl[b] != 0):
                    # If binary value of 1, pixel value odd
                    pixl[b] -= 1
        if (d == data_length - 1):
            # Continue at final pixel of collection, to next
            if (pixl[-1] % 2 == 0):
                if(pixl[-1] != 0):
                    pixl[-1] -= 1
                else:
                    pixl[-1] += 1
        else:
            # Stop reading at final pixel of collection, as complete
            if (pixl[-1] % 2 != 0):
                pixl[-1] -= 1
        # Yield iterations
        pixl = tuple(pixl)
        yield pixl[0:3]
        yield pixl[3:6]
        yield pixl[6:9]


def inp_pixel(img_gen, data):
    """
    Function: new pixels into an image
    """
    p = img_gen.size[0]
    # Declare coordinates
    (x, y) = (0, 0)
    for pixel in conv_pixl(img_gen.getdata(), data):
        # Input altered pixels to image w/ putpixel() from PIL
        img_gen.putpixel((x, y), pixel)
        if (x == p - 1):
            x = 0
            y += 1
        else:
            x += 1


def txt_read(data):
    """
    Function: read data from file and store contents in variable
    """
    inp_file = open(data, "r")
    content = inp_file.read()
    inp_file.close
    return content


def txt_write(data):
    """
    Function: write data to file from contents stored in variable
    """
    out_file = open("steg_output.txt", "w")
    out_file.write(data)
    out_file.close()


def encode():
    """
    Function: encode data from desired message into newly generated image
    """
    # User input: name of desired initial target image to encode upon
    img = input(
        "\nType the name of the existing image w/ extensio"
        "n (e.g. vimtutor.png)\nthen;\nPress `Enter' to exe"
        "cute\n>> "
    )
    # Open, read and store image matching user input
    img_cont = Image.open(img, "r")
    # User input: take text from input doc, named by user, and store in <data>
    data = txt_read(
        input(
            "\nType the name of the document containing text t"
            "o-be encoded\nthen;\nPress `Enter' to Execute\n>> "
        )
    )
    # Capture width and height of input image
    (w, h) = img_cont.size
    # Calculate size of image and store
    # We know bit depth = 24; also <len(data)> is fine as it's plain text
    img_size = w * h * 24
    # If size of text file is > than target image, return error
    if len(data) > img_size:
        raise RuntimeError(
            "\nFATAL ERROR, FOOL! Text file too big! Try s"
            "toring a smaller text file, unde"
            "r " + str((img_size / 8) / 1024) + "kB!"
        )
    # If there is no input, return error
    elif (len(data) == 0):
        raise ValueError("\nFATAL ERROR, FOOL! No data present! Try again!")
    # Prime for storage in memory
    img_gen = img_cont.copy()
    inp_pixel(img_gen, data)
    # User input: name of desired generated image with encoded message
    img_gen_title = input(
        "\nType the desired name of the generated im"
        "age w/ desired extension (e.g. neovimtutor."
        "png)\nthen;\nPress `Enter' to execute\n>> "
    )
    # Save generated image with desired title, syntax, and attribute ordering
    img_gen.save(img_gen_title, str(img_gen_title.split(".")[1].upper()))


def decode():
    """
    Function: decode data from message in target image
    """
    # User input: name of desired target image to decode from
    img = input(
        "\nType the name of the existing image w/ ex"
        "tension (e.g. neovimtutor.png)\nthen;\nPress "
        "`Enter' to execute\n>> "
    )
    # Open image of name matching user input, read and store
    img_cont = Image.open(img, "r")
    # Empty string for data
    data = ""
    # Store data found while iterating
    img_data = iter(img_cont.getdata())
    while (True):
        # Iterate through pixels in image
        pixels = [
            value for value in img_data.__next__()[0:3] +
            img_data.__next__()[0:3] +
            img_data.__next__()[0:3]
        ]
        # Empty string for characters found
        search = ""
        # Loop over pixels
        for b in pixels[0:8]:
            if (b % 2 == 0):
                search += "0"
            else:
                search += "1"
        # Append integer value of Unicode matching find
        data += chr(int(search, 2))
        if (pixels[-1] % 2 != 0):
            return data
        # Write data from <data> to new text document
        txt_write(data)


def interface():
    """
    Function: interfaceable function
    """
    print(
        "================================================"
        "======\n== Welcome to the Steganography Tutor - "
        "Version 1.7 ==\n================================"
        "======================\n"
    )
    # User input: choosing whether to encode or decode
    a = input(
        "Type `E' to ENCODE a message\nor;\nType `D' to DE"
        "CODE a message\nthen;\nPress `Enter' to execute\n>> "
    )
    if (a == "E"):
        # If user selects `E', call encoding function
        encode()
    elif (a == "D"):
        # If user selects `D', call decoding function
        print("\nDecoded message follows:\n<< " + decode())
    else:
        raise Exception("\nChoose a valid option")


if __name__ == "__main__":
    """
    Driver Code Program: testing functionality of interface
    """
    # Call interface function
    interface()
